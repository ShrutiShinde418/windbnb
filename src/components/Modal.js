import React, { Fragment } from "react";
import Drawer from "./Drawer";
import { createPortal } from "react-dom";

const Modal = ({ hideModal }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop hideModal={hideModal} />,
        document.getElementById("backdrop")
      )}
      {createPortal(<Drawer />, document.getElementById("modal"))}
    </Fragment>
  );
};

const Backdrop = ({ hideModal }) => {
  return (
    <div
      className="fixed bg-[#00000080] min-h-screen w-full top-0 left-0 z-10"
      onClick={hideModal}
    ></div>
  );
};
export default Modal;
