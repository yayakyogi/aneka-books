import Button from "elements/Button";
import React from "react";
import { formatRupiah } from "utils/formatRupiah";

const CardCheckout = (props) => {
  return (
    <div className="mt-10 md:mt-0 w-full md:w-72 lg:w-80 shadow-lg rounded-md p-3 border-2 border-gray-100">
      <h2 className="font-semibold text-lg mb-3 text-gray-500">
        How much do you want to buy?
      </h2>
      <h2 className="font-medium mb-2">QTY</h2>
      <div className="flex justify-start items-center mb-2">
        <Button
          className="rounded-full w-6 h-6 flex justify-center items-center bg-blue-800"
          onClick={props.decrement}
        >
          <span className="text-2xl text-white mb-2">-</span>
        </Button>
        <span className="text-xl mx-3">{props.qty}</span>
        <Button
          className="rounded-full w-6 h-6 flex justify-center items-center bg-blue-800"
          onClick={props.increment}
        >
          <span className="text-xl text-white mb-1">+</span>
        </Button>
      </div>
      <hr />
      <div className="flex justify-between items-center mt-4 mb-5">
        <h1 className="text-lg font-semibold text-gray-600">Total</h1>
        <h1 className="text-lg font-semibold text-blue-800">
          Rp {formatRupiah(props.total.toString())}
        </h1>
      </div>
      <Button
        isBlock
        isPrimary
        className="hover:bg-blue-700 focus:ring-2 ring-blue-400"
        onClick={props.onClick}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CardCheckout;
