import React, { Fragment } from "react";
import Drawer from "./Drawer";
import { createPortal } from "react-dom";
import modalSlice from "../store/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {createPortal(<Drawer />, document.getElementById("modal"))}
    </Fragment>
  );
};

const Backdrop = () => {
  const { closeModal } = modalSlice.actions;
  const dispatch = useDispatch();
  return (
    <div
      className="fixed bg-[#00000080] min-h-screen w-full top-0 left-0 z-10"
      onClick={() => dispatch(closeModal())}
    ></div>
  );
};
export default Modal;
