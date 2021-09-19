import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, FormGroup, Row, Spinner } from "reactstrap";
import * as Yup from "yup";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.string,
};

SearchForm.defaultProps = {
  onSubmit: null,
  loading: "idle",
};

// const SearchSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     hometown: Yup.string().required('Hometown is required'),
// });

const SearchSchema = Yup.object()
  .shape({
    name: Yup.string(),
    email: Yup.string(),
    hometown: Yup.string(),
  })
  .test((obj) => {
    let error = true;
    for (let prop in obj) {
      if (obj[prop]) {
        error = false;
      }
    }
    return error
      ? new Yup.ValidationError("provide some info dude!??", undefined, "name")
      : "";
  });

function SearchForm(props) {
  const { onSubmit, loading } = props;
  const history = useHistory();
  return (
    <div className="search-form">
      <Formik
        initialValues={{
          name: "",
          email: "",
          hometown: "",
        }}
        validationSchema={SearchSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => {
          // do something here ...
          return (
            <Form>
              <Row>
                <Col sm={12} md={8}>
                  <FastField
                    name="name"
                    component={InputField}
                    label="Name"
                    placeholder="name to search"
                    type="text"
                  />
                  <FastField
                    name="email"
                    component={InputField}
                    label="Email"
                    placeholder="email address"
                    type="email"
                  />
                  <FastField
                    name="hometown"
                    component={InputField}
                    label="Hometown"
                    placeholder="hometown"
                    type="text"
                  />
                </Col>
                <Col sm={12} md={4} className="d-flex flex-column-reverse">
                  <FormGroup className="justify-content-end d-flex">
                    <Button
                      type="submit"
                      color="primary"
                      className="mb-3"
                      style={{ width: "7rem" }}
                    >
                      {"Search   "}
                      {loading === "pending" && <Spinner size="sm" />}
                    </Button>
                  </FormGroup>
                  <FormGroup className="justify-content-end d-flex">
                    <Button
                      type="button"
                      color="primary"
                      className="mb-3"
                      style={{ width: "7rem" }}
                      onClick={() => history.push("/profile")}
                    >
                      close
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default SearchForm;
