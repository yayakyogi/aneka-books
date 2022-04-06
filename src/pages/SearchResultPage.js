import Footer from "parts/Footer";
import ListBookSection from "parts/ListBookSection";
import Navbar from "parts/Navbar";
import Pagination from "parts/Pagination";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPage } from "redux/actions/page";

const SearchResultPage = () => {
  const { q } = useParams();
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
        `/volumes?q=${q}&startIndex=${startIndex}&maxResult=10`,
        "listbook"
      )
    );
  }, [startIndex]);

  if (!page.listbook) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl font-light">Sedang memuat data...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ListBookSection isPageSearch search={q} data={page.listbook} />
      <Pagination />
      <Footer />
    </>
  );
};

export default SearchResultPage;
