import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import modalSlice from "../store/modalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { openModal } = modalSlice.actions;
  return (
    <nav className="mt-5 flex justify-between items-center font-mulish">
      <div>
        <img src={logo} alt="windbnb" />
      </div>
      <form
        className="flex relative items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(openModal());
        }}
      >
        <Input
          type="text"
          name="location"
          id="location"
          defaultValue="Helsinki, Finland"
          onFocus={() => dispatch(openModal())}
          className="px-5 py-3 border rounded-l-xl border-gray2 shadow-cu"
        />
        <Input
          type="text"
          name="guests"
          id="guests"
          onFocus={() => dispatch(openModal())}
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
