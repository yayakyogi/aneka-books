import React from "react";
import propTypes from "prop-types";
import Button from "elements/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage } from "redux/actions/page";

const Breadcrumb = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const restPagination = (pageHref) => {
    dispatch(changePage(0));
    navigate(pageHref);
  };

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
                  <Button onClick={() => restPagination(item.pageHref)}>
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
