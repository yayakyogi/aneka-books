import IcShoppingChart from "assets/icons/ic_shopping_cart.png";
import Button from "elements/Button";
import InputText from "elements/InputText";
import Title from "elements/Title";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePage } from "redux/actions/page";
import { formatRupiah } from "utils/formatRupiah";
import { GetBalance } from "utils/geBalance";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const submitForm = () => {
    dispatch(changePage(0));
    navigate(`/search/${search}`);
  };

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
          <span className="text-sn font-medium">
            Rp. {formatRupiah(GetBalance().toString())}
          </span>
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
        <form className="pt-5" onSubmit={submitForm}>
          <InputText
            name="search"
            value={search}
            placeholder="Search product, title and author"
            onChange={(value) => onChange(value)}
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
        <form className="pt-5" onSubmit={submitForm}>
          <InputText
            name="search"
            value={search}
            placeholder="Search product, title and author"
            onChange={(value) => onChange(value)}
            className="md:hidden inline bg-gray-100 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-1 ring-slate-400"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
