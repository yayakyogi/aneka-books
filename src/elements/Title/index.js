import Button from "elements/Button";
import React from "react";

const Title = () => {
  return (
    <Button type="link" href="/" className="hover:no-underline">
      <span className="md:text-2xl text-xl font-bold text-blue-700">Aneka</span>
      <span className="md:text-2xl text-xl font-bold text-gray-800">
        Books.
      </span>
    </Button>
  );
};

export default Title;
