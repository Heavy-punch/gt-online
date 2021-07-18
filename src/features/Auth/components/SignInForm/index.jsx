import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

SignInForm.propTypes = {
    onSubmit: PropTypes.func,
};

SignInForm.defaultProps = {
    onSubmit: null,
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

function SignInForm(props) {
    const { onSubmit } = props;
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
                {formikProps => {
                    // do something here ...
                    const { values, errors, touched, isSubmitting } = formikProps;

                    return (
                        <Form>
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



                            <FormGroup className="justify-content-end d-flex">
                                <Button type="submit" color='primary' className="mt-3">
                                    {"Sign in   "}
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

export default SignInForm;