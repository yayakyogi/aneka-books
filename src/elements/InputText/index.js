/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import propTypes from "prop-types";

const InputText = (props) => {
  // destructuring props
  const { className, name, type, placeholder, value, errorResponse } = props;
  const [hasError, setHasError] = useState(null);

  // pattern to validation email and phone number
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "phone") pattern = "[0-9]";

  // handle every change from text input
  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }
    if (type === "phone") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className="mb-5">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
      {hasError && <span className="text-red-600">{hasError}</span>}
    </div>
  );
};

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here ..",
  errorResponse: "Please match the requested format.",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
};

export default InputText;
