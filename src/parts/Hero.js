import React from "react";
import ImageHero from "assets/images/image-hero.svg";
import Button from "elements/Button";

const Hero = (props) => {
  function showRecommendBook() {
    window.scrollTo({
      top: props.refListBookSection.current.offsetTop - 30, // code to add 30 pixel from top
      behavior: "smooth", // command for smooth scroll
    });
  }

  return (
    <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 mt-10 md:mt-20 mb-28">
      <div className="block sm:flex items-start">
        <div className="w-80 sm:w-96 md:w-1/2">
          <h1 className="font-medium text-5xl sm:text-4xl md:text-6xl lg:text-7xl">
            Book is a magic portal{" "}
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-500 font-thin mt-5 md:mt-8">
            "--Stephen King"
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400 mt-3 md:mt-5">
            We provide what you need to add to a wider knowledge. It's time to
            start reading.
          </p>
          <Button
            isPrimary
            onClick={showRecommendBook}
            className="px-8 md:px-10 py-2 md:py-3 mt-10 shadow-lg hover:shadow-xl duration:300 hover:scale-105 hover:bg-blue-700 focus:ring-4 ring-blue-400"
          >
            <span className="text-md md:text-xl font-bold text-white">
              Show me now
            </span>
          </Button>
        </div>
        <div className="w-20" />
        <img
          src={ImageHero}
          alt="hero"
          className="hidden sm:block sm:w-64 md:w-80 lg:w-96"
        />
      </div>
    </div>
  );
};

export default Hero;
