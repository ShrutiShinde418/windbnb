import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Input from "../components/Input";
import Button from "../components/Button";

const Navbar = ({ displayModal }) => {
  const [search, setSearch] = useState({
    location: "Helsinki, Finland",
    guests: "",
  });
  const searchChangeHandler = (e) => {
    console.log(e);
    setSearch((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(search);
  };
  const showModal = () => {
    displayModal();
    // console.log(showModalHandler);/
    // console.log(displayModal);
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
          value={search.location}
          onChange={searchChangeHandler}
          onFocus={showModal}
          className="px-5 py-3 border rounded-l-xl border-gray2 shadow-cu"
        />
        <Input
          type="text"
          name="guests"
          id="guests"
          value={search.guests}
          onChange={searchChangeHandler}
          onFocus={showModal}
          placeholder="Add guests"
          className="px-5 py-3 border border-gray2 shadow-cu"
        />
        <Button
          type="submit"
          className="flex items-center border rounded-r-xl border-gray2 px-4 py-3"
        >
          <span className="material-symbols-outlined text-darkOrange">
            search
          </span>
        </Button>
      </form>
    </nav>
  );
};

export default Navbar;
