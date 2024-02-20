import { useState } from "react";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="xl:container xl:mx-auto md:px-8">
      {showModal && <Modal hideModal={hideModalHandler} />}
      <Navbar displayModal={showModalHandler} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
