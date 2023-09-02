import React, { useState } from "react";
import logo from "../assets/logo.svg";

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
        <input
          type="text"
          name="search-place"
          id="search-place"
          value="Helsinki, Finland"
          className="px-5 py-3 border rounded-l-xl border-gray2 shadow-cu"
        />
        <input
          type="text"
          name="search-guests"
          id="search-guests"
          value={search}
          onChange={searchChangeHandler}
          placeholder="Add guests"
          className="px-5 py-3 border border-gray2 shadow-cu"
        />
        <button
          type="submit"
          className="flex item-center border rounded-r-xl border-gray2 px-4 py-3"
        >
          <span class="material-symbols-outlined text-darkOrange">search</span>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
