import { getSchool } from 'app/appSlice';
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
import { checkEducationDisable, checkFieldTouched, generateSchoolSelectOption } from 'utils/common';
import "./UserEducationField.scss";

UserEducationField.propTypes = {
    form: PropTypes.object.isRequired,
};

UserEducationField.defaultProps = {

}

function UserEducationField(props) {
    const dispatch = useDispatch();
    const { form, push, remove, name } = props;
    const { values, errors, touched } = form;

    const patt = `${name}\\[\\d\\].school`
    const pattObj = new RegExp(patt, "g");
    const showError = typeof errors[name] === 'string' && checkFieldTouched(touched, pattObj);

    const { schoolList, loading, error } = useSelector(state => state.app);
    const schoolOptions = schoolList && generateSchoolSelectOption(schoolList);

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
                        disabled={checkEducationDisable(values[name]) || showError}
                        outline
                        color={showError ? "warning" : "info"}
                        className="p-1"
                        type="button"
                        onClick={() => push({ school: '', year_graduated: "" })}
                    >
                        {showError ? "Something went wrong" : "Add Another School"}
                    </Button>
                </Col>
            </Row>

            {
                values[name].map((item, index) => (
                    <Row key={index} className="education__group">
                        {loading === "pending" ? <LoadingBox />
                            : error ? <MessageBox variant="error">{error}</MessageBox>
                                : schoolOptions && (<FastField
                                    name={`${name}[${index}].school`}
                                    component={SelectField}

                                    label="School"
                                    placeholder="your school"
                                    options={schoolOptions}
                                />)}
                        <FastField
                            name={`${name}[${index}].year_graduated`}
                            component={InputField}

                            label="Year Graduated"
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
            <CustomErrorMessage showError={showError} error={errors[name]} />
        </FormGroup>
    );
}

export default UserEducationField;