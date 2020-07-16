import React from "react";
import ReactDOM from "react-dom";
import { ModalContainer } from "./ModalContainer";

export const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalContainer>{props.children}</ModalContainer>,
    document.getElementById("modalRoot")
  );
};
