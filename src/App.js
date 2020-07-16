import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "./redux/slices";
import { Modal } from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const modalShown = useSelector((state) => state.shown);

  return (
    <>
      {modalShown && <Modal />}
      <div onClick={() => dispatch(modalSlice.actions.show())}>geas</div>
    </>
  );
}

export default App;
