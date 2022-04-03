import IcShoppingChart from "assets/icons/ic_shopping_cart.png";
import Button from "elements/Button";
import InputText from "elements/InputText";
import Title from "elements/Title";
import React from "react";

const Navbar = (props) => {
  const NavMenu = (props) => {
    return (
      <div className="flex items-center">
        <Button type="link" href="/history">
          <img
            src={IcShoppingChart}
            width={props.isMobile ? 25 : 30}
            height={props.isMobile ? 25 : 30}
            alt="Icon shopping cart"
          />
        </Button>
        <div className="ml-4">
          <span className="text-xs font-light block">Balance</span>
          <span className="text-sn font-medium">Rp. 100.000</span>
        </div>
      </div>
    );
  };

  if (props.isCenter) {
    return (
      <div className="bg-white 2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 border-b-2 border-gray-100 h-20 flex justify-center items-center">
        <Title />
      </div>
    );
  }
  return (
    <nav className="bg-white 2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 border-b-2 border-gray-100 md:h-20 h-36">
      {/* show on dekstop */}
      <div className="md:flex hidden justify-between items-center">
        <Title />
        <form className="pt-5">
          <InputText
            name="search"
            placeholder="Search product, title and author"
            onChange={(value) => console.log(value)}
            value=""
            className="md:inline hidden bg-gray-100 px-4 py-2 w-96 rounded-md focus:outline-none focus:ring-1 ring-slate-400"
          />
        </form>
        <NavMenu />
      </div>

      {/* show on mobile */}
      <div className="md:hidden block xl:px-56 lg:px-20 md:px-10 px-5 pt-3">
        <div className="flex items-center justify-between w-full">
          <Title />
          <NavMenu isMobile />
        </div>
        <form className="pt-6">
          <InputText
            name="search"
            placeholder="Search product, title and author"
            onChange={(value) => console.log(value)}
            value=""
            className=" bg-gray-100 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-1 ring-slate-400"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
