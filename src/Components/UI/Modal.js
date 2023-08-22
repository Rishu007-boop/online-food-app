import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const PortalPlace = document.getElementById("Overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<BackDrop onClose={props.onClick} />, PortalPlace)}
      ;
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalPlace
      )}
    </Fragment>
  );
};

export default Modal;
