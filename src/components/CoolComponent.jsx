import React from "react";
import { useDispatch } from "react-redux";
import { modalTextSlice } from "../redux/slices";

export const CoolComponent = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(modalTextSlice.actions.modalText(Math.random()));
        }}
      >
        set modal text
      </button>
    </div>
  );
};
