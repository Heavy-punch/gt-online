import { getSchool } from 'app/appSlice';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { FastField } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, FormGroup, Label, Row } from 'reactstrap';
import { generateSelectOption } from 'utils/common';
import "./UserEducationField.scss";

UserEducationField.propTypes = {
    // field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    schoolOptions: PropTypes.array
};

UserEducationField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    schoolOptions: []
}

function UserEducationField(props) {
    const { form, push, remove, name } = props;
    const { values } = form;
    const dispatch = useDispatch();

    const { schoolList, loading, error } = useSelector(state => state.app);
    // console.log(schoolList);
    const schoolOptions = schoolList && generateSelectOption(schoolList);
    console.log(schoolOptions);

    useEffect(() => {
        dispatch(getSchool());
    }
        , [dispatch,]);


    return (
        <FormGroup row className="mb-3 education">
            <Row>
                <Col sm={3} xs={6}>
                    <Label for={name} sm={3}>Education</Label>
                </Col>
                <Col sm={6} xs={6}>
                    <Button
                        outline
                        color="info"
                        className="p-1"
                        type="button"
                        onClick={() => push({ school: '', graduate: '' })}
                    >
                        Add Another School
                    </Button>
                </Col>
            </Row>
            {
                values[name].map((item, index) => (
                    <Row key={index} className="education__group">
                        {schoolOptions && (<FastField
                            name={`${name}[${index}].school`}
                            component={SelectField}

                            label="School"
                            placeholder="your school"
                            options={schoolOptions}
                        />)}
                        <FastField
                            name={`${name}[${index}].graduate`}
                            component={InputField}

                            label="Year Graduate"
                            placeholder="Year graduate"
                            type="number"
                        />
                        <Col className="d-flex justify-content-end">
                            <Button
                                outline
                                className="deleteBtn"
                                type="button"
                                onClick={() => remove(index)}
                            >
                                delete this school
                            </Button>
                        </Col>
                    </Row>
                ))
            }


        </FormGroup>

    );
}

export default UserEducationField;