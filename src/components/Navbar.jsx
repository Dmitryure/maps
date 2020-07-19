import React from "react";
import { useDispatch } from "react-redux";
import { modalSlice } from "../redux/slices";

export const Navbar = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(modalSlice.actions.show("login"))}>
        Login
      </button>
      <button onClick={() => dispatch(modalSlice.actions.show("somemodal"))}>
        SomeModal
      </button>
    </div>
  );
};
