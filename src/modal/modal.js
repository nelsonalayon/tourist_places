import React from "react";

import ReactDOM from "react-dom";

import { BlackBackground } from "./styles";

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  } else {
    return (
      <div>
        {ReactDOM.createPortal(
          <BlackBackground onClick={props.onClose}>
            {props.children}
          </BlackBackground>,
          document.getElementById("modal")
        )}
      </div>
    );
  }
};

export default Modal;
