import Cart from "../Cart/Cart";
import classes from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={classes.modal}>
      <Cart />
    </div>
  );
};

export default Modal;
