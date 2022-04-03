import React from "react";
import InputText from "elements/InputText";
import Title from "elements/Title";
import ProfileDummy from "assets/images/img_dummy.jpg";
import IcShoppingChart from "assets/icons/ic_shopping_cart.png";
import Button from "elements/Button";

const Navbar = () => {
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
        <div className="flex items-center">
          <Button type="link" href="/chart">
            <img
              src={IcShoppingChart}
              width={30}
              height={30}
              alt="Icon shopping cart"
            />
          </Button>
          <div style={{ width: 20 }} />
          <Button type="link" href="/chart">
            <img
              src={ProfileDummy}
              width={40}
              height={40}
              alt="profile"
              className="rounded-full"
            />
          </Button>
        </div>
      </div>

      {/* show on mobile */}
      <div className="md:hidden block xl:px-56 lg:px-20 md:px-10 px-5 pt-3">
        <div className="flex items-center justify-between w-full">
          <div>
            <Button type="link" href="/profile">
              <img
                src={ProfileDummy}
                width={35}
                height={35}
                alt="profile"
                className="rounded-full"
              />
            </Button>
          </div>
          <Title />
          <Button type="link" href="/chart">
            <img
              src={IcShoppingChart}
              width={25}
              height={25}
              alt="Icon shopping cart"
            />
          </Button>
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
