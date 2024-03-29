import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Row, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import "./CommentForm.scss";

CommentForm.propTypes = {
    onSubmit: PropTypes.func,
};
CommentForm.defaultProps = {
    onSubmit: null,
}
const SignupSchema = Yup.object().shape({
    comment: Yup.string(),
});

function CommentForm(props) {
    const { onSubmit } = props;
    return (
        <div className="status-form">
            <Formik
                initialValues={{
                    comment: '',
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
                                        name="comment"
                                        component={InputField}

                                        type="textarea"
                                        placeholder="Your Comment..."
                                    />
                                </Col>
                                <Col sm={3} className="d-flex align-items-center justify-content-xs-end justify-content-md-start">
                                    <Button type="submit" color='primary' disabled={values["status"] === ""} style={{ fontSize: "0.725rem" }}>
                                        Send
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

export default CommentForm;