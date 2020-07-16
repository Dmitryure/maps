import React from "react";
import style from "./ModalContainer.module.css";
import { useDispatch } from "react-redux";
import { modalSlice } from "../redux/slices";

export const ModalContainer = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(modalSlice.actions.show());
      }}
      className={style.container}
    >
      {props.children}
    </div>
  );
};
