import Breadcrumb from "elements/Breadcrumb";
import HistoryList from "parts/HistoryList";
import Navbar from "parts/Navbar";
import React from "react";

const History = () => {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "History", pageHref: "" },
  ];
  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumb} />
      <HistoryList />
    </>
  );
};

export default History;
