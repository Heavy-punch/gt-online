import { getEmployer } from 'app/appSlice';
import CustomErrorMessage from 'components/CustomErrorMessage';
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { FastField } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';
import { checkDisable, checkFieldTouched, generateEmployerSelectOption } from 'utils/common';
import "./UserProfessionalField.scss";

UserProfessionalField.propTypes = {
    // field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

UserProfessionalField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function UserProfessionalField(props) {
    const { form, push, remove, name } = props;
    const { values, errors, touched } = form;

    const showError = errors[name] && checkFieldTouched(touched, name);

    const dispatch = useDispatch();

    const { employerList, loading, error } = useSelector(state => state.app);
    const employerOptions = employerList && generateEmployerSelectOption(employerList);

    useEffect(() => {
        dispatch(getEmployer());
    }
        , [dispatch,]);


    return (
        <FormGroup row className="mb-3 education">
            <Row>
                <Col sm={3} xs={6}>
                    <Label for={name} sm={3}>Professional</Label>
                </Col>
                <Col sm={6} xs={6}>
                    <Button
                        disabled={checkDisable(values[name]) || showError}
                        outline
                        color={showError ? "warning" : "info"}
                        className="p-1"
                        type="button"
                        onClick={() => push({ employer: '', job_title: '' })}
                    >
                        {showError ? "something went wrong" : "Add Another Job"}
                    </Button>
                </Col>
            </Row>
            {
                values[name].map((item, index) => (
                    <Row key={index} className="education__group">
                        {loading === "pending" ? <LoadingBox />
                            : error ? <MessageBox variant="error">{error}</MessageBox>
                                : employerList && <FastField
                                    name={`${name}[${index}].employer`}
                                    component={SelectField}

                                    label="Employer"
                                    placeholder="select your job"
                                    options={employerOptions}
                                />}
                        <FastField
                            name={`${name}[${index}].job_title`}
                            component={InputField}

                            label="Job Title"
                            placeholder="Your job title"
                            type="text"
                        />
                        <Col className="d-flex justify-content-end">
                            <Button
                                outline
                                className="deleteBtn"
                                type="button"
                                onClick={() => remove(index)}
                            >
                                delete this job
                            </Button>
                        </Col>
                    </Row>
                ))
            }
            <CustomErrorMessage showError={showError} error={errors[name]} />
        </FormGroup>

    );
}

export default UserProfessionalField;