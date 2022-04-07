import Image404 from "assets/images/image-404.png";
import Button from "elements/Button";
import React from "react";

const Page404 = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-normal mb-10">
          Page not found!
        </h1>
        <img
          src={Image404}
          className="mx-auto w-72 sm:w-1/2 mb-20"
          alt="img-completed"
        />
        <Button
          type="link"
          href="/"
          className="bg-blue-700 hover:bg-blue-800 px-16 py-3 text-white font-bold rounded-md shadow-xl border"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Page404;
