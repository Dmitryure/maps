import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "./components/Modal";
import { LoginModal } from "./components/LoginModal";
import { SomeModal } from "./components/SomeModal";
import { Navbar } from "./components/Navbar";

const componentsMap = {
  login: LoginModal,
  somemodal: SomeModal,
};

function App() {
  const modalState = useSelector((state) => state.show);
  const CurrentModal = componentsMap[modalState];

  return (
    <>
      {<Modal current={modalState}>{modalState && <CurrentModal />}</Modal>}
      <Navbar />
    </>
  );
}

export default App;
