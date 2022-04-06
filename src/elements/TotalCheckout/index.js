import Button from "elements/Button";
import React from "react";
import { formatRupiah } from "utils/formatRupiah";

const TotalCheckout = (props) => {
  const { total } = props;
  const totalPay = total + 1000;

  return (
    <div className="block md:flex justify-end mt-10 border border-gray-100 p-2 rounded-sm shadow-md">
      <div className="w-full md:w-72 lg:w-80">
        <h1 className="font-bold text-xl mb-5">Total Checkout</h1>
        <div className="flex justify-between items-center mb-2">
          <h1>Transaction fee</h1>
          <span>Rp {formatRupiah("1000")}</span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <h1>Total Product</h1>
          <span>Rp {formatRupiah(total.toString())}</span>
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 py-2 mb-2">
          <h1 className="font-bold">Total (IDR)</h1>
          <span className="font-semibold text-red-600 text-xl">
            Rp {formatRupiah(totalPay.toString())}
          </span>
        </div>
        <Button
          isBlock
          isPrimary
          className="mt-6 text-lg font-bold hover:bg-blue-700 "
          onClick={props.onClick}
        >
          BUY
        </Button>
      </div>
    </div>
  );
};

export default TotalCheckout;
