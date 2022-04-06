import Breadcrumb from "elements/Breadcrumb";
import CheckoutList from "parts/CheckoutList";
import Navbar from "parts/Navbar";
import React from "react";
import { getData } from "utils/localStorage";

const PaymentPage = () => {
  const dataCheckout = getData("checkout");

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Book Details", pageHref: `/detail/${dataCheckout.bookId}` },
    { pageTitle: "Payments", pageHref: "" },
  ];

  return (
    <>
      <Navbar isCenter />
      <Breadcrumb data={breadcrumb} />
      <CheckoutList checkout={dataCheckout} />
    </>
  );
};

export default PaymentPage;
