import React from "react";
import { useDispatch } from "react-redux";
import style from "./Modal.module.css";
import { modalSlice } from "../redux/slices";

export const Modal = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(modalSlice.actions.show())}
      className={style.container}
    >
      hello
    </div>
  );
};
