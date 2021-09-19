import { GENDER_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import UserEducationField from "custom-fields/UserEducationField";
import UserInterestField from "custom-fields/UserInterestField";
import UserProfessionalField from "custom-fields/UserProfessionalField";
// import { date, object } from "yup";
import { isDate, parse } from "date-fns";
import { FastField, FieldArray, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";
import "./EditProfileForm.scss";

EditProfileForm.propTypes = {
  onSubmit: PropTypes.func,
};
EditProfileForm.defaultProps = {
  onSubmit: null,
};

//date validate helper
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

//array validate
Yup.addMethod(Yup.array, "unique", function (message, mapper = (a) => a) {
  return this.test("unique", message, function (list) {
    return list.length === new Set(list.map(mapper)).size;
  });
});

const transformObject = (item) => {
  let str = "";
  for (let prop in item) {
    str += item[prop];
  }
  return str.toUpperCase().replace(/\s/g, "");
};

//
// const prepareProfessionalArray = (item) => {
//   let compareResult =
//     item.length ===
//     item.filter((obj) => {
//       for (let prop in obj) {
//         if (!obj[prop]) return false;
//       }
//       return true;
//     }).length;
//   return compareResult;
// };
//
// const prepareEducationArray = (item) => {
//   let compareResult = item.length === item.filter((obj) => obj.school).length;
//   // console.log(compareResult);
//   return compareResult;
// };

const today = new Date();
const EditProfileSchema = Yup.object().shape({
  sex: Yup.string().required("gender is required"),
  birthday: Yup.date()
    .transform(parseDateString)
    .max(today)
    .required("you have to complete this field"),
  city: Yup.string().nullable(),
  hometown: Yup.string().nullable(),
  interests: Yup.array().nullable().unique("interest must be unique"),
  // education: Yup.array().nullable().unique('education info must be unique', item => transformObject(item)).test("education", "please choose school", item => prepareEducationArray(item)),
  // professional: Yup.array().nullable().unique('education info must be unique', item => transformObject(item)).test("professional", "fields should not be empty", item => prepareProfessionalArray(item)),
  // education: Yup.array().nullable().unique('education info must be unique', item => transformObject(item)).test("education", "please choose school", item => prepareEducationArray(item)),

  // professional: Yup.array().nullable().unique('education info must be unique', item => transformObject(item)).test("professional", "fields should not be empty", item => prepareProfessionalArray(item)),

  education: Yup.array(
    Yup.object().shape({
      school: Yup.string().required("required"),
      year_graduated: Yup.number().nullable(),
    })
  )
    .nullable()
    .unique("education info must be unique", (item) => transformObject(item)),
  professional: Yup.array(
    Yup.object().shape({
      employer: Yup.string().required("required"),
      job_title: Yup.string().required("required"),
    })
  )
    .nullable()
    .unique("education info must be unique", (item) => transformObject(item)),
});

function EditProfileForm(props) {
  const history = useHistory();
  const { onSubmit, initialValues } = props;

  const handleCancelClick = () => {
    history.push("/profile");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={EditProfileSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => {
          // do something here ...
          const { isSubmitting } = formikProps;
          return (
            <Form>
              <FastField
                name="sex"
                component={SelectField}
                label="Sex"
                placeholder="your gender"
                options={GENDER_OPTIONS}
              />
              <FastField
                name="birthday"
                component={InputField}
                label="Birthday"
                placeholder="Your birthday"
                type="date"
              />
              <FastField
                name="city"
                component={InputField}
                label="Current City"
                placeholder="Your current city"
                type="text"
              />
              <FastField
                name="hometown"
                component={InputField}
                label="Hometown"
                placeholder="Your hometown"
                type="text"
              />
              <FieldArray
                name="interests"
                component={UserInterestField}
                type="text"
              />

              <hr></hr>

              <FieldArray name="education" component={UserEducationField} />

              <FieldArray
                name="professional"
                component={UserProfessionalField}
              />

              {/* <FastField
                                name="education"
                                component={UserInterestField}

                                label="Education"
                                placeholder="Add your interest"
                                type="text"
                            />
                            <FastField
                                name="professional"
                                component={UserInterestField}

                                label="Professional"
                                placeholder="Add your interest"
                                type="text"
                            /> */}

              {/* ********************************* */}

              <FormGroup className="justify-content-end d-flex">
                <Button
                  type="reset"
                  color="warning"
                  className="mt-3 mx-2"
                  onClick={handleCancelClick}
                >
                  {"cancel"}
                </Button>
                <Button type="submit" color="primary" className="mt-3">
                  {"save"}
                  {isSubmitting && <Spinner size="sm" />}
                </Button>
              </FormGroup>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default EditProfileForm;
