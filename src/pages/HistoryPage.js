import Breadcrumb from "elements/Breadcrumb";
import HistoryList from "parts/HistoryList";
import Navbar from "parts/Navbar";
import React, { useEffect, useState } from "react";
import { getData } from "utils/localStorage";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "History", pageHref: "" },
  ];

  useEffect(() => {
    // get data from localStorage
    const dataPayments = getData("payments");
    // initialize data array
    const data = [];
    // change object dataPayments to array and push to data
    dataPayments !== null &&
      Object.keys(dataPayments).map((key) => {
        return data.push({
          id: key,
          ...dataPayments[key],
        });
      });
    // save data to setHistory
    setHistory(data);
  }, [""]);

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumb} />
      <HistoryList data={history} />
    </>
  );
};

export default HistoryPage;
