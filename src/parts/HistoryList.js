import ListItem from "elements/ListItem";
import React from "react";

const HistoryList = () => {
  return (
    <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2">
      <div className="hidden md:flex justify-between items-center mt-10 border-y border-gray-200 py-3 px-2">
        <h1 className="font-semibold text-md text-blue-900 w-3/5">Barang</h1>
        <h1 className="font-semibold text-md text-blue-900">Harga</h1>
        <h1 className="font-semibold text-md text-blue-900">QTY</h1>
        <h1 className="font-semibold text-md text-blue-900">Jumlah</h1>
        <h1 className="font-semibold text-md text-blue-900 w-40 text-center">
          Date
        </h1>
      </div>
      <ListItem isHistory />
    </div>
  );
};

export default HistoryList;
