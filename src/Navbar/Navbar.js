import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Input from "../components/Input";
import Button from "../components/Button";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <nav className="mt-5 flex justify-between items-center font-mulish">
      <div>
        <img src={logo} alt="windbnb" />
      </div>
      <form className="flex relative items-center">
        <Input
          type="text"
          name="location"
          id="location"
          value="Helsinki, Finland"
          className="px-5 py-3 border rounded-l-xl border-gray2 shadow-cu"
        />
        <Input
          type="text"
          name="guests"
          id="guests"
          value={search}
          onChange={searchChangeHandler}
          placeholder="Add guests"
          className="px-5 py-3 border border-gray2 shadow-cu"
        />
        <Button
          type="submit"
          className="flex items-center border rounded-r-xl border-gray2 px-4 py-3"
        >
          <span class="material-symbols-outlined text-darkOrange">search</span>
        </Button>
      </form>
    </nav>
  );
};

export default Navbar;
