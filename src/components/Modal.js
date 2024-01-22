import React, { Fragment } from "react";
import Drawer from "./Drawer";
import { createPortal } from "react-dom";

const Modal = () => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {createPortal(<Drawer />, document.getElementById("modal"))}
    </Fragment>
  );
};

const Backdrop = () => {
  return (
    <div className="fixed bg-slate-400 min-h-screen w-full top-0 left-0 z-10"></div>
  );
};
export default Modal;
