import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Footer from "./components/Footer";
import { Fragment } from "react";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="xl:container xl:mx-auto md:px-8">
      <ModalComponent />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

function ModalComponent() {
  const modalState = useSelector((state) => state.modal.showModal);
  return <Fragment>{modalState && <Modal />}</Fragment>;
}

export default App;
