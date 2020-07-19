import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import { useTransition, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../redux/slices";

export const Modal = (props) => {
  console.log(props.current);
  const showModal = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const transition = useTransition(showModal, null, {
    from: { top: "-1000px", opacity: 0 },
    enter: { top: "0px", opacity: 1 },
    leave: { top: "1000px", opacity: 0 },
  });

  const contentTransition = useTransition(showModal, null, {
    from: { borderRadius: "0%", opacity: 0 },
    enter: { borderRadius: "50%", opacity: 1 },
    leave: { borderRadius: "0%", opacity: 0 },
    config: { delay: 500, duration: 300 },
  });

  return ReactDOM.createPortal(
    transition.map(({ item, key, props: springProps }) => {
      return (
        item && (
          <div key={props.current} className={style.container}>
            <animated.div
              key={key}
              onClick={() => {
                dispatch(modalSlice.actions.show(false));
              }}
              className={style.modal}
              style={springProps}
            />
            {contentTransition.map(({ item, key, props: springProps }) => {
              return (
                item && (
                  <animated.div
                    key={key}
                    style={springProps}
                    className={style.content}
                  >
                    {props.children}
                  </animated.div>
                )
              );
            })}
          </div>
        )
      );
    }),
    document.getElementById("modalRoot")
  );
};
