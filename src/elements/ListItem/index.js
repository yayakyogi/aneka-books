import React from "react";
import { formatDate } from "utils/formatDate";
import { formatRupiah } from "utils/formatRupiah";

const ListItem = (props) => {
  const { price, total } = props;
  return (
    <div className="md:flex justify-between items-center border-b border-gray-200 py-4 px-2 mt-5 md:mt-0">
      {/* Image and Book title */}
      <div className="w-full md:w-3/5 flex justify-start items-start">
        <img src={props.cover} className="w-20 mr-3 md:mr-5" alt="img-cover" />
        <div className="w-full md:w-auto">
          <h3 className="text-sm text-gray-500 mt-3 md:mt-0">{props.author}</h3>
          <h1 className="text-xl text-gray-900 font-bold">{props.title}</h1>
          <div className="flex md:hidden justify-between mt-2">
            <div>
              <span className="text-xs">
                Rp {formatRupiah(price.toString())} x {props.qty}
              </span>
            </div>
            <div className="font-semibold text-sm">
              Rp {formatRupiah(total.toString())}
            </div>
          </div>
          {props.isHistory && (
            <div className="block md:hidden w-full">
              <span className="text-gray-600 text-xs text-right block mt-2">
                {formatDate(props.date)}
              </span>
            </div>
          )}
        </div>
      </div>
      {/* show when on desktop */}
      <div className="hidden md:block">
        <p>Rp {formatRupiah(price.toString())}</p>
      </div>
      <div className="hidden md:block">
        <p>x {props.qty}</p>
      </div>
      <div className="hidden md:block">
        <p>Rp {formatRupiah(total.toString())}</p>
      </div>
      {props.isHistory && (
        <div className="hidden md:block w-40">
          <p>{formatDate(props.date)}</p>
        </div>
      )}
    </div>
  );
};

export default ListItem;
