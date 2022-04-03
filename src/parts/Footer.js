import Button from "elements/Button";
import Title from "elements/Title";
import React from "react";

const Footer = () => {
  return (
    <div className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 border-t-2 border-gray-100">
      <div className="block md:flex justify-between items-start py-10">
        <div className="w-96">
          <Title />
          <p className="text-lg font-light text-gray-700 mt-3 mb-5">
            Books are a bridge of knowledge to connect knowledge with real life.
          </p>
        </div>
        <div>
          <h1 className="text-lg text-blue-700 font-medium mb-3">
            For Beginners
          </h1>
          <Button type="link" href="#">
            <p className="text-md text-gray-400 mb-1">New Account</p>
          </Button>
          <Button type="link" href="#">
            <p className="text-md text-gray-400 mb-1">Start buy</p>
          </Button>
          <Button type="link" href="#">
            <p className="text-md text-gray-400 md:mb-1 mb-5">Use payments</p>
          </Button>
        </div>
        <div>
          <h1 className="text-lg text-blue-700 font-medium mb-3">Connect Us</h1>
          <Button type="link" href="#">
            <p className="text-md text-gray-400 mb-1">Privacy</p>
          </Button>
          <Button type="link" href="#">
            <p className="text-md text-gray-400 md:mb-1 mb-5">
              Terms & Conditions
            </p>
          </Button>
        </div>
        <div>
          <h1 className="text-lg text-blue-700 font-medium mb-3">Explore Us</h1>
          <Button type="link" href="#">
            <p className="text-md text-gray-400 mb-1">
              anekabooks@anekabooks.id
            </p>
          </Button>
          <Button type="link" href="#">
            <p className="text-md text-gray-400 mb-1">0812 - 3456 - 7890</p>
          </Button>
          <p className="text-md text-gray-400 md:mb-1 mb-5">
            Anekabooks, Kediri, Jawatimur
          </p>
        </div>
      </div>
      <p className="text-md text-gray-400 my-10 text-center">
        Copyright &copy; 2022 • All rights reserved • Anekabooks
      </p>
    </div>
  );
};

export default Footer;
