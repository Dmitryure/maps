import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "./redux/slices";
import { Modal } from "./components/Modal";
import { CoolComponent } from "./components/CoolComponent";

function App() {
  const dispatch = useDispatch();
  const modalShown = useSelector((state) => state.show);
  const modalText = useSelector((state) => state.modalText);

  return (
    <>
      {
        <Modal>
          <div>{modalText}</div>
        </Modal>
      }

      <div onClick={() => dispatch(modalSlice.actions.show())}>geas</div>
      <CoolComponent />
    </>
  );
}

export default App;
