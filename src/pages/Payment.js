import Breadcrumb from "elements/Breadcrumb";
import CheckoutList from "parts/CheckoutList";
import Navbar from "parts/Navbar";
import React from "react";

const Payments = () => {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Book Details", pageHref: "/detail" },
    { pageTitle: "Payments", pageHref: "" },
  ];
  return (
    <>
      <Navbar isCenter />
      <Breadcrumb data={breadcrumb} />
      <CheckoutList />
    </>
  );
};

export default Payments;
