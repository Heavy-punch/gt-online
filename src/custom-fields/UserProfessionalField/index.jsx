import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { FormGroup, Input, Label, FormFeedback, Col, Button, Row } from 'reactstrap';
import { ErrorMessage, FastField, Field } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { EMPLOYER_OPTIONS, SCHOOL_OPTIONS } from 'constants/global';
import "./UserProfessionalField.scss"

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
    const { values } = form;
    // console.log(values[name]);


    return (
        <FormGroup row className="mb-3 education">
            <Row>
                <Col sm={3} xs={6}>
                    <Label for={name} sm={3}>Professional</Label>
                </Col>
                <Col sm={6} xs={6}>
                    <Button
                        outline
                        color="info"
                        className="p-1"
                        type="button"
                        onClick={() => push({ employer: '', jobTitle: '' })}
                    >
                        Add Another Job
                    </Button>
                </Col>
            </Row>
            {
                values[name].map((item, index) => (
                    <Row key={index} className="education__group">
                        <FastField
                            name={`${name}[${index}].employer`}
                            component={SelectField}

                            label="Employer"
                            placeholder="select your job"
                            options={EMPLOYER_OPTIONS}
                        />
                        <FastField
                            name={`${name}[${index}].jobTitle`}
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


        </FormGroup>

    );
}

export default UserProfessionalField;