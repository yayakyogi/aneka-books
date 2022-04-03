import ListItem from "elements/ListItem";
import TotalCheckout from "elements/TotalCheckout";
import React from "react";

const CheckoutList = (props) => {
  return (
    <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2">
      <div className="block md:flex">
        <div className="w-full md:w-3/5 lg:w-full mr-10">
          <div className="hidden md:flex justify-between items-center mt-10 border-y border-gray-200 py-3 px-2">
            <h1 className="font-semibold text-md text-blue-900 w-3/5">
              Barang
            </h1>
            <h1 className="font-semibold text-md text-blue-900">Harga</h1>
            <h1 className="font-semibold text-md text-blue-900">QTY</h1>
            <h1 className="font-semibold text-md text-blue-900">Jumlah</h1>
          </div>
          <ListItem />
        </div>
        <TotalCheckout />
      </div>
    </div>
  );
};

export default CheckoutList;
