import React, { useEffect, useState } from "react";
import ImageSuccess from "assets/images/image-completed.png";
import Button from "elements/Button";

const SuccessPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl font-light">
          Transaction is being processed...
        </h1>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl text-blue-900 font-semibold mb-3">
          Transaction Success!
        </h1>
        <img
          src={ImageSuccess}
          className="mx-auto w-72 sm:w-96"
          alt="img-completed"
        />
        <p className="text-lg sm:text-xl text-gray-400 mb-10">
          Thank you for purchasing a book in our store
        </p>
        <Button
          type="link"
          href="/"
          className="bg-blue-700 hover:bg-blue-800 px-20 py-3 text-white font-bold rounded-md shadow-xl"
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
