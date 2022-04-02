import React from "react";

const Navbar = () => {
  return (
    <nav className="py-4 px-1 bg-white border-b-2 border-gray-50">
      <div className="px-10 flex justify-between items-center">
        <div className="flex justify-start items-center">
          <h3>
            <span className="text-2xl font-bold text-blue-700">Aneka</span>
            <span className="text-2xl font-bold text-gray-800">Books.</span>
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
