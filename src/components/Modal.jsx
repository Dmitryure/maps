import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import { useTransition, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../redux/slices";

export const Modal = (props) => {
  const showModal = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const transition = useTransition(showModal, null, {
    from: { top: "-1000px", opacity: 0 },
    enter: { top: "0px", opacity: 1 },
    leave: { top: "1000px", opacity: 0 },
  });
  return ReactDOM.createPortal(
    <div>
      {transition.map(({ item, key, props: springProps }) => {
        return (
          item && (
            <animated.div
              key={key}
              onClick={() => {
                dispatch(modalSlice.actions.show(false));
              }}
              className={style.container}
              style={springProps}
            >
              {props.children}
            </animated.div>
          )
        );
      })}
    </div>,
    document.getElementById("modalRoot")
  );
};
