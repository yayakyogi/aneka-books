import Button from "elements/Button";
import React from "react";
import propTypes from "prop-types";

const Bookcard = (props) => {
  const { author, title, price, imageUrl } = props;
  return (
    <Button
      className="bookcard mt-3 bg-white shadow rounded-md p-2 border-2 border-gray-100 hover:shadow-xl hover:scale-110 duration-200"
      onClick={() => console.log("Go to detail page")}
    >
      <img src={imageUrl} alt="cover" className="md:w-56 w-40" />
      <p className="text-xs text-gray-600 text-left">Author: {author}</p>
      <h1 className="text-lg font-semibold text-left mt-2">{title}</h1>
      <p className="text-left text-blue-800 font-mono">Rp {price}</p>
    </Button>
  );
};

Bookcard.propTypes = {
  imageUrl: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number,
};

export default Bookcard;

// https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg
