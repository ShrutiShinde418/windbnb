import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <nav className="mt-5 flex justify-between items-center">
      <div>
        <img src={logo} alt="windbnb" />
      </div>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={searchChangeHandler}
          placeholder="Add guests"
          className="px-4 py-3 border rounded-2xl border-gray2 shadow-cu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
