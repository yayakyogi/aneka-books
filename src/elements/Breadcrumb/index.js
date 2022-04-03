import React from "react";
import propTypes from "prop-types";
import Button from "elements/Button";

const Breadcrumb = (props) => {
  const className = [
    "breadcrumb inline-flex items-center space-x-1 md:space-x-3",
    props.className,
  ];

  return (
    <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-5 mt-5 md:mt-10">
      <nav aria-label="breadcrumb">
        <ol className={className.join(" ")}>
          {props.data.map((item, index) => {
            return (
              <li
                key={`breadcrumb-${index}`}
                className={`text-md md:text-lg ${
                  index === props.data.length - 1
                    ? "pl-2 font-semibold"
                    : "text-gray-300 font-normal after:content-['/'] after:pl-4"
                }`}
              >
                {index === props.data.length - 1 ? (
                  item.pageTitle
                ) : (
                  <Button type="link" href={item.pageHref}>
                    {item.pageTitle}
                  </Button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};

export default Breadcrumb;
