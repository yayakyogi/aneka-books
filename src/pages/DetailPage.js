import Breadcrumb from "elements/Breadcrumb";
import LoadingContent from "elements/LoadingContent";
import BookDescription from "parts/BookDescription";
import CardCheckout from "parts/CardCheckout";
import Footer from "parts/Footer";
import Navbar from "parts/Navbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPage } from "redux/actions/page";
import { cekDuplicateBook } from "utils/cekDuplicateBook";
import { getData, storeData } from "utils/localStorage";
import { alertMessage } from "utils/toast";

const DetailPage = () => {
  let { id } = useParams(); // get params id

  const navigate = useNavigate(); // to navigate at another page
  const page = useSelector((state) => state.page); // get state redux
  const dispatch = useDispatch(); // handling action redux

  const [qty, setQty] = useState(1); // state qty
  const balance = getData("balances"); // get balances from localStorage
  const total = 25000; // state total

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Book Details", pageHref: "" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!page[id]) {
      dispatch(fetchPage(`/volumes/${id}`, id)); // get detail book by params id
    }
  }, [""]);

  // function to increment & decrement qty
  const decrement = () => setQty(qty > 1 ? qty - 1 : 1);
  const increment = () => setQty(qty + 1);

  // data payment
  const paymentData = {
    date: new Date(),
    bookId: id,
    author: page[id]?.volumeInfo.authors,
    title: page[id]?.volumeInfo.title,
    cover: page[id]?.volumeInfo.imageLinks.thumbnail,
    price: 25000,
    qty,
    total: total * qty,
  };

  // function to handle payment
  const payment = () => {
    // cek if the book has already been added
    if (cekDuplicateBook(paymentData.title)) {
      alertMessage("error", "The book has been purchased");
      return false;
    }
    // cek if total price >= balance
    if (total * qty >= balance) {
      alertMessage("error", "Balance is not enough to make a transaction");
      return false;
    }
    // save data payment to localStorage
    storeData("checkout", paymentData);
    // navigate to payment page
    navigate("/payment");
  };

  if (!page[id]) {
    return <LoadingContent message="Loading data .." />;
  }

  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumb} />
      <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 block md:flex justify-between items-start mt-8 mb-20">
        <div className="p-2 rounded-md border-2 border-gray-100">
          <img
            src={page[id].volumeInfo.imageLinks.thumbnail}
            className="w-full md:w-40 lg:w-56"
            alt="img-cover"
          />
        </div>
        <BookDescription data={page[id]} />
        <CardCheckout
          decrement={decrement}
          increment={increment}
          qty={qty}
          total={total * qty}
          onClick={payment}
        />
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
