import Footer from "parts/Footer";
import Hero from "parts/Hero";
import ListBookSection from "parts/ListBookSection";
import Navbar from "parts/Navbar";
import React, { useEffect, useRef } from "react";

const ListPage = () => {
  const refListBookSection = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Navbar />
      <Hero refListBookSection={refListBookSection} />
      <ListBookSection refListBookSection={refListBookSection} />
      <Footer />
    </div>
  );
};

export default ListPage;
