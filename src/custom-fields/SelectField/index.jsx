import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Col, FormFeedback, FormGroup, Label } from 'reactstrap';
import "./SelectField.scss";

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    const { field, form, options, label, placeholder, disabled } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    // console.log(props);

    const selectedOption = options.find(option => option.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    const handleBlur = () => {
        form.setTouched({ [name]: true });
    }

    return (

        <FormGroup row className="mb-3">
            {label && <Label for={name} sm={4}>{label}</Label>}
            <Col sm={8}>
                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}
                    onBlur={handleBlur}

                    placeholder={placeholder}
                    isDisabled={disabled}
                    options={options}

                    className={showError ? 'is-invalid' : ''}
                />
                <ErrorMessage name={name} component={FormFeedback} />
            </Col>
        </FormGroup>
    );
}

export default SelectField;