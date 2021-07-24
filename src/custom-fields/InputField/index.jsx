import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label, FormFeedback, Col } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup row className="mb-3">
            {label && <Label for={name} sm={4}>{label}</Label>}
            <Col sm={label ? 8 : 12}>
                <Input
                    id={name}
                    {...field}

                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}

                    invalid={showError}
                />
                <ErrorMessage name={name} component={FormFeedback} />
            </Col>
        </FormGroup>
    );
}

export default InputField;