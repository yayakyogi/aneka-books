import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "redux/actions/page";

const Pagination = () => {
  // get pageState from reducer
  const pageState = useSelector((state) => state.page.pageState);
  // call useDispatch to take action
  const dispatch = useDispatch();
  // array pagination
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // local state pagination
  const [pageActive, setPageActive] = useState(pageState + 1);
  // function to change page active
  const getPage = (item) => {
    // change pagination active
    setPageActive(item);
    // change pageState to item
    dispatch(changePage(item));
  };
  return (
    <div className="w-full 2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 mt-3 mb-10">
      <div className="flex justify-start items-center">
        {page.map((item, index) => {
          return (
            <div
              onClick={() => getPage(item)}
              key={index}
              className={`${
                pageActive === item && "bg-blue-500 text-white"
              } px-3 md:px-4 py-1 md:py-2 border border-gray-200 hover:cursor-pointer`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
