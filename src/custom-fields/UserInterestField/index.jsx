import { Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap';

UserInterestField.propTypes = {
    // field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

UserInterestField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function UserInterestField(props) {
    const { form, push, remove, name } = props;
    const { values } = form;
    // console.log(values[name]);


    return (
        <FormGroup row className="mb-3">
            <Label for={name} sm={4}>Interests</Label>
            <Col sm={8}>
                {
                    values[name].map((item, index) => (
                        <Row key={index}>
                            <Field name={`${name}.${index}`} >
                                {(props) => {
                                    const { form, field } = props;
                                    const { value, name } = field;
                                    const { errors, touched } = form;
                                    return (
                                        <Row>
                                            <Col xs={8}>
                                                <Input
                                                    id={name}
                                                    {...field}

                                                    type="text"
                                                    placeholder="your interest"
                                                    invalid={errors[name] && touched[name]}
                                                />
                                            </Col>
                                            <Col xs={2}>
                                                {name !== `interests.${values.interests.length - 1}` && <Button
                                                    close
                                                    color="link"
                                                    onClick={() => remove(index)}
                                                    disabled={value === ''}
                                                >
                                                    <span aria-hidden>&ndash;</span>
                                                </Button>}
                                            </Col>
                                            <Col xs={2}>
                                                {name === `interests.${values.interests.length - 1}` && <Button
                                                    outline
                                                    type="button"
                                                    color="info"
                                                    onClick={() => push('')}
                                                    disabled={value === ''}
                                                >
                                                    add
                                                </Button>}
                                            </Col>
                                        </Row>
                                    );
                                }}
                            </Field>
                        </Row>
                    ))
                }
            </Col>
        </FormGroup>

    );
}

export default UserInterestField;