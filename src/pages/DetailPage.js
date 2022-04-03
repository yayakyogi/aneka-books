import React from "react";
import Navbar from "parts/Navbar";
import Breadcrumb from "elements/Breadcrumb";
import BookDescription from "parts/BookDescription";
import CardCheckout from "parts/CardCheckout";
import Footer from "parts/Footer";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  // data breadcrumb
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Book Details", pageHref: "" },
  ];
  // function to handle button checkout
  const checkout = () => {
    navigate("/payment");
  };
  return (
    <>
      <Navbar />
      <Breadcrumb data={breadcrumb} />
      <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 block md:flex justify-between items-start mt-8 mb-20">
        <div className="p-2 rounded-md border-2 border-gray-100">
          <img
            src="https://cdn.gramedia.com/uploads/items/9786230029806_Demon_Slayer_8.jpg"
            className="w-full md:w-40 lg:w-56"
            alt="img-cover"
          />
        </div>
        <BookDescription />
        <CardCheckout onClick={checkout} />
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
