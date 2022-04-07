import React, { useEffect, useRef } from "react";
import Footer from "parts/Footer";
import Hero from "parts/Hero";
import ListBookSection from "parts/ListBookSection";
import Navbar from "parts/Navbar";

import { fetchPage } from "redux/actions/page";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "parts/Pagination";

const ListPage = () => {
  // useRef to make scrool smooth
  const refListBookSection = useRef(null);
  // page state to show data books by page
  const page = useSelector((state) => state.page);
  // call useDispatch to take action
  const dispatch = useDispatch();
  // get value pageState and multiply by 10
  const startIndex = page.pageState * 10;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // call function fetchPage to trigger API
    dispatch(
      fetchPage(
        `/volumes?q=technologies&startIndex=${startIndex}&maxResult=10`,
        "listbook"
      )
    );
  }, [startIndex]); // refresh page every startIndex change value

  if (!page.listbook) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl font-light">Loading data...</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero refListBookSection={refListBookSection} />
      <ListBookSection
        refListBookSection={refListBookSection}
        data={page.listbook}
      />
      <Pagination />
      <Footer />
    </div>
  );
};

export default ListPage;
