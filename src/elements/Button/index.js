import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const className = [props.className];

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // if button have props isDisable or isLoading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) {
      className.push("bg-gray-200 text-gray-700");
    }
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <div className="row justify-center items-center py-3 px-4">
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Loading...
          </div>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // if button have props.type Link
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
        >
          props.children
        </a>
      );
    }
    return (
      <Link
        to={props.href}
        className={className.join("")}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isPrimary: propTypes.bool,
  isLoading: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
};

export default Button;
