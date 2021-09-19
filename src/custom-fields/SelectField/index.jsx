import CustomErrorMessage from "components/CustomErrorMessage";
import { getIn } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Col, FormGroup, Label } from "reactstrap";
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
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const error = getIn(errors, name);
  const touch = getIn(touched, name);

  const handleBlur = () => {
    form.setTouched({ [name]: true });
  };

  const showError = (error && touched[name]) || (error && touch);
  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup row className="mb-3">
      {label && (
        <Label for={name} sm={4}>
          {label}
        </Label>
      )}
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
          className={showError ? "is-invalid" : ""}
        />
        {/* <div className={showError ? 'is-invalid' : ''} style={{ "display": "none" }}></div>
                <ErrorMessage name={name} component={FormFeedback} /> */}
        <CustomErrorMessage showError={showError} error={error} />
      </Col>
    </FormGroup>
  );
}

export default SelectField;
