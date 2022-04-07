import Button from "elements/Button";
import React from "react";
import propTypes from "prop-types";

const Bookcard = (props) => {
  const { id, title, price, imageUrl } = props;
  return (
    <Button
      type="link"
      href={`/detail/${id}`}
      className="bookcard mt-3 bg-white shadow rounded-md p-2 border border-gray-100 hover:shadow-xl hover:scale-105 duration-500 ease-in-out"
    >
      <div className="flex flex-col items-start justify-around">
        <img src={imageUrl} alt="cover" className="w-full xl:h-80" />
        <div className="h-28">
          <h1 className="text-md font-semibold text-left mt-2">
            {title.length > 40 ? title.substring(0, 40) + "..." : title}
          </h1>
          <p className="text-left text-blue-800 font-mono">Rp {price}</p>
        </div>
      </div>
    </Button>
  );
};

Bookcard.propTypes = {
  imageUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number,
};

export default Bookcard;
