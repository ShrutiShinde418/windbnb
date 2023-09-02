import React, { Fragment } from "react";
import Input from "./Input";
import Button from "./Button";

const Drawer = () => {
  return (
    <Fragment>
      <form className="flex relative items-center font-mulish my-10">
        <div className="flex flex-col relative">
          <label
            for="location"
            className="font-extrabold text-[9px] text-black1 uppercase absolute left-8 top-3"
          >
            Location
          </label>
          <Input
            type="text"
            name="location"
            id="location"
            placeholder="Add location"
            className="px-7 pb-2 pt-6 border rounded-l-2xl border-gray2 shadow-cu focus:rounded-2xl"
          />
        </div>
        <div className="flex flex-col relative">
          <label
            for="guests"
            className="font-extrabold text-[9px] text-black1 uppercase absolute left-8 top-3"
          >
            guests
          </label>
          <Input
            type="text"
            name="guests"
            id="guests"
            placeholder="Add guests"
            className="px-7 pb-2 pt-6 border border-gray2 shadow-cu focus:rounded-2xl"
          />
        </div>
        <div className="flex items-center border rounded-r-2xl border-gray2 py-1">
          <Button
            type="submit"
            className="flex items-center gap-3 px-7 py-3 mx-32 rounded-2xl bg-darkOrange"
          >
            <span class="material-symbols-outlined text-gray2">search</span>
            <p className="text-gray2 font-bold">Search</p>
          </Button>
        </div>
      </form>
      <ul className="font-mulish text-gray3 text-base flex flex-col gap-7">
        <li>
          <button className="flex items-center gap-2">
            <span class="material-symbols-rounded">location_on</span>
            Helsinki, Finland
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <span class="material-symbols-rounded">location_on</span>
            Turku, Finland
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <span class="material-symbols-rounded">location_on</span>
            Oulu, Finland
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <span class="material-symbols-rounded">location_on</span>
            Vaasa, Finland
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

export default Drawer;
