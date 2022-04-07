import Button from "elements/Button";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage } from "redux/actions/page";

const Title = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const restPagination = () => {
    dispatch(changePage(0));
    navigate("/");
  };
  return (
    <Button onClick={restPagination} className="title hover:no-underline">
      <span className="md:text-2xl text-xl font-bold text-blue-700">Aneka</span>
      <span className="md:text-2xl text-xl font-bold text-gray-800">
        Books.
      </span>
    </Button>
  );
};

export default Title;
