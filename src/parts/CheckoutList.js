import ListItem from "elements/ListItem";
import TotalCheckout from "elements/TotalCheckout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getData, storeData } from "utils/localStorage";

const CheckoutList = (props) => {
  const { checkout } = props;
  const balance = getData("balances");
  const navigate = useNavigate();

  // function to handle payment
  const payment = () => {
    // get data from localStorage
    const data = getData("payments");
    // change data to array
    let result = data === null ? [] : Object.keys(data).map((key) => data[key]);
    // destructuring newData => checkout
    const newData = { ...checkout, total: checkout.total + 1000 };
    // add newData to begining array
    result.unshift(newData);
    // convert array to object
    let objc = Object.assign({ ...result });
    // save remaining balance to localStorage
    storeData("balances", balance - (checkout.total + 1000));
    // save to localStorage
    storeData("payments", objc);
    // redirect to success page
    navigate("/success");
  };

  return (
    <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2">
      <div className="block md:flex">
        <div className="w-full md:w-3/5 lg:w-full mr-10">
          <div className="hidden md:flex justify-between items-center mt-10 border-y border-gray-200 py-3 px-2">
            <h1 className="font-semibold text-md text-blue-900 w-3/5">
              Product
            </h1>
            <h1 className="font-semibold text-md text-blue-900">Price</h1>
            <h1 className="font-semibold text-md text-blue-900">QTY</h1>
            <h1 className="font-semibold text-md text-blue-900">Total</h1>
          </div>
          <ListItem
            cover={checkout.cover}
            author={checkout.author}
            title={checkout.title}
            date={checkout.date}
            price={checkout.price}
            total={checkout.total}
            qty={checkout.qty}
          />
        </div>
        <TotalCheckout total={checkout.total} onClick={payment} />
      </div>
    </div>
  );
};

export default CheckoutList;
