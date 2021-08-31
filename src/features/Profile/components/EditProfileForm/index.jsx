import React from 'react';
import "./EditProfileForm.scss";
import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import SelectField from 'custom-fields/SelectField';
import { GENDER_OPTIONS } from 'constants/global';
import UserInterestField from 'custom-fields/UserInterestField';
// import { date, object } from "yup";
import { parse, isDate } from "date-fns";
import UserEducationField from 'custom-fields/UserEducationField';
import UserProfessionalField from 'custom-fields/UserProfessionalField';

EditProfileForm.propTypes = {
    onSubmit: PropTypes.func,
};
EditProfileForm.defaultProps = {
    onSubmit: null,
}

function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}
const today = new Date();
const EditProfileSchema = Yup.object().shape({
    sex: Yup.number().required('gender is required'),
    birthday: Yup.date().transform(parseDateString).max(today).required("you have to complete this field"),
    city: Yup.string().nullable(),
    hometown: Yup.string().nullable(),
    intersts: Yup.array().nullable(),
    education: Yup.array().nullable(),
    professional: Yup.array().nullable(),
});

function EditProfileForm(props) {
    const history = useHistory();
    const { onSubmit, initialValues } = props;

    const handleCancelClick = () => {
        history.push('/profile');
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={EditProfileSchema}
                onSubmit={onSubmit}
            >
                {formikProps => {
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

                            <FieldArray
                                name="education"
                                component={UserEducationField}
                            />

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
                                <Button type="reset" color='warning' className="mt-3 mx-2" onClick={handleCancelClick}>
                                    {"cancel"}
                                </Button>
                                <Button type="submit" color='primary' className="mt-3">
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