import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
    loading: PropTypes.string
};


RegisterForm.defaultProps = {
    onSubmit: null,
    loading: "idle",
}

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().required('Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
function RegisterForm(props) {
    const history = useHistory();
    const { onSubmit, loading } = props;

    const handleCancelClick = () => {
        history.push('/auth');
    }
    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={onSubmit}
            >
                {formikProps => {
                    // do something here ...
                    return (
                        <Form>
                            <FastField
                                name="firstName"
                                component={InputField}

                                label="First Name"
                                placeholder="Your first name"
                                type="text"
                            />
                            <FastField
                                name="lastName"
                                component={InputField}

                                label="Last Name"
                                placeholder="Your last name"
                                type="text"
                            />
                            <FastField
                                name="email"
                                component={InputField}

                                label="Email"
                                placeholder="Your email address"
                                type="email"
                            />
                            <FastField
                                name="password"
                                component={InputField}

                                label="Password"
                                placeholder="Your password"
                                type="password"
                            />
                            <FastField
                                name="passwordConfirmation"
                                component={InputField}

                                label="Confirm Password"
                                placeholder="Retype your password"
                                type="password"
                            />



                            <FormGroup className="justify-content-end d-flex">
                                <Button type="reset" color='warning' className="mt-3 mx-2" onClick={handleCancelClick}>
                                    {"cancel"}
                                </Button>
                                <Button type="submit" color='primary' className="mt-3">
                                    {"register   "}
                                    {loading === "pending" && <Spinner size="sm" />}
                                </Button>
                            </FormGroup>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default RegisterForm;