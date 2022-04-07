import ListItem from "elements/ListItem";
import React from "react";

const HistoryList = (props) => {
  const { data } = props;
  return (
    <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2">
      <div className="hidden md:flex justify-between items-center mt-10 border-y border-gray-200 py-3 px-2">
        <h1 className="font-semibold text-md text-blue-900 w-3/5">Product</h1>
        <h1 className="font-semibold text-md text-blue-900">Price</h1>
        <h1 className="font-semibold text-md text-blue-900">QTY</h1>
        <h1 className="font-semibold text-md text-blue-900">Total</h1>
        <h1 className="font-semibold text-md text-blue-900 w-40 text-center">
          Date Purchase
        </h1>
      </div>
      {data.length === 0 ? (
        <div className="h-40 md:h-10 flex justify-center items-center my-3 pb-3 md:border-b border-gray-200 text-gray-500 font-thin">
          You haven't made a book purchase yet
        </div>
      ) : (
        data?.map((payment, index) => {
          return (
            <ListItem
              key={`history-${index}`}
              isHistory
              cover={payment.cover}
              author={payment.author}
              title={payment.title}
              date={payment.date}
              price={payment.price}
              total={payment.total}
              qty={payment.qty}
            />
          );
        })
      )}
    </div>
  );
};

export default HistoryList;
