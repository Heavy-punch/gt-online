import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';

RequestForm.propTypes = {
    onSubmit: PropTypes.func,
    requestFriend: PropTypes.object.isRequired,
};


RequestForm.defaultProps = {
    onSubmit: null,
}

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    hometown: Yup.string().required('Hometown is required'),
    relationship: Yup.string().required('relationship is required'),
});
function RequestForm(props) {
    const history = useHistory();
    const { onSubmit, requestFriend } = props;

    const handleCancelClick = () => {
        history.goBack();
    }
    return (
        <div>
            <Formik
                initialValues={{
                    name: requestFriend.firstName + " " + requestFriend.lastName,
                    hometown: requestFriend.hometown,
                    relationship: '',
                }}
                validationSchema={RegisterSchema}
                onSubmit={onSubmit}
            >
                {formikProps => {
                    // do something here ...
                    const { isSubmitting } = formikProps;
                    return (
                        <Form>
                            <FastField
                                name="name"
                                component={InputField}

                                label="Name"
                                type="text"
                                disabled={true}
                            />
                            <FastField
                                name="hometown"
                                component={InputField}

                                label="HomeTown"
                                type="text"
                                disabled={true}
                            />
                            <FastField
                                name="relationship"
                                component={InputField}

                                label="Relationship"
                                placeholder="Your Relationship"
                                type="text"
                            />


                            <FormGroup className="justify-content-end d-flex">
                                <Button type="reset" color='warning' className="mt-3 mx-2" onClick={handleCancelClick}>
                                    {"cancel"}
                                </Button>
                                <Button type="submit" color='primary' className="mt-3">
                                    {"Send Friend Request   "}
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

export default RequestForm;