import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import staysSlice from "../store/staysSlice";
import modalSlice from "../store/modalSlice";

const locations = [
  "Helsinki, Finland",
  "Turku, Finland",
  "Oulu, Finland",
  "Vaasa, Finland",
];

const Drawer = () => {
  const dispatch = useDispatch();
  const { setLocationUsingButton, filterStays } = staysSlice.actions;
  const { closeModal } = modalSlice.actions;
  const stays = useSelector((state) => state.stays);
  const [showLocations, setShowLocations] = useState(false);
  const [location, setLocation] = useState(stays.location);
  const [showGuests, setShowGuests] = useState(false);
  let sum = 0;
  sum = Object.values(stays.guests).reduce((acc, val) => {
    return acc + val;
  }, 0);

  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
    dispatch(setLocationUsingButton({ location: e.target.value }));
  };
  const selectLocationHandler = (e, selectedLocation) => {
    setLocation(selectedLocation);
    dispatch(setLocationUsingButton({ location: selectedLocation }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(filterStays({ guests: sum, location: stays.location }));
    dispatch(closeModal());
  };
  useEffect(() => {
    dispatch(filterStays({ guests: sum, location: stays.location }));
  }, [stays.location, stays.guests, dispatch, filterStays, sum]);

  return (
    <div className="fixed z-50 top-0 w-full bg-white h-3/5 xl:mx-auto md:px-32">
      <form
        className="flex justify-between font-mulish my-10"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col relative w-full">
          <label
            htmlFor="location"
            className="font-extrabold text-[9px] text-black1 uppercase absolute left-8 top-3"
          >
            Location
          </label>
          <Input
            type="text"
            name="location"
            value={stays.location}
            id="location"
            placeholder="Add location"
            autoComplete="off"
            className="px-7 pb-2 pt-6 border rounded-l-2xl border-gray2 shadow-cu focus:rounded-2xl"
            onFocus={() => setShowLocations(true)}
            onChange={(e) => locationChangeHandler(e)}
          />
          {showLocations && (
            <ul className="font-mulish text-gray3 text-base flex flex-col gap-7 mt-12">
              {locations.map((availableLocation) => {
                return (
                  <li key={availableLocation}>
                    <Button
                      className="flex items-center gap-2"
                      onClick={(e) =>
                        selectLocationHandler(e, availableLocation)
                      }
                    >
                      <span className="material-symbols-rounded">
                        location_on
                      </span>
                      {availableLocation}
                    </Button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="flex flex-col relative w-full">
          <label
            htmlFor="guests"
            className="font-extrabold text-[9px] text-black1 uppercase absolute left-8 top-3"
          >
            guests
          </label>
          <Input
            type="number"
            name="guests"
            id="guests"
            placeholder="Add guests"
            className="px-7 pb-2 pt-6 border border-gray2 shadow-cu focus:rounded-2xl"
            onFocus={() => setShowGuests(true)}
            readOnly
            value={sum}
            autoComplete="off"
          />
          {showGuests && (
            <ul className="font-mulish text-gray3 text-base flex flex-col gap-10 mt-12">
              <li>
                <p className="text-sm text-black1 font-bold">Adults</p>
                <p className="text-sm text-gray1">Ages 13 or above </p>
                <Counter type="adults" />
              </li>
              <li>
                <p className="text-sm text-black1 font-bold">Children</p>
                <p className="text-sm text-gray1">Ages 2-12</p>
                <Counter type="children" />
              </li>
            </ul>
          )}
        </div>
        <div className="flex items-center border rounded-r-2xl border-gray2 py-1 self-start">
          <Button
            type="submit"
            className="flex items-center gap-3 px-7 py-3 mx-32 rounded-2xl bg-darkOrange"
          >
            <span className="material-symbols-outlined text-gray2">search</span>
            <p className="text-gray2 font-bold">Search</p>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Drawer;
