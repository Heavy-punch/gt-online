import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import "./StatusForm.scss";



StatusForm.propTypes = {
    onSubmit: PropTypes.func,
};
StatusForm.defaultProps = {
    onSubmit: null,
}

const SignupSchema = Yup.object().shape({
    status: Yup.string(),
});

function StatusForm(props) {
    const { onSubmit } = props;
    return (
        <div className="status-form">
            <Formik
                initialValues={{
                    status: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
                {formikProps => {
                    // do something here ...
                    const { values, isSubmitting } = formikProps;
                    return (
                        <Form>
                            <Row>
                                <Col sm={9}>
                                    <FastField
                                        name="status"
                                        component={InputField}

                                        type="textarea"
                                    />
                                </Col>
                                <Col sm={3} className="d-flex align-items-center justify-content-end">
                                    <Button type="submit" color='primary' disabled={values["status"] === ""} style={{ fontSize: "0.725rem" }}>
                                        Add Update
                                        {isSubmitting && <Spinner size="sm" />}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default StatusForm;