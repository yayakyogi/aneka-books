/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import propTypes from "prop-types";

const InputText = (props) => {
  // destructuring props
  const { className, name, type, placeholder, value } = props;

  // handle every change from text input
  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    props.onChange(target);
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
    </div>
  );
};

InputText.defaultProps = {
  type: "text",
  placeholder: "Please type here ..",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
};

export default InputText;
