import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );

  //   const cartTotal = cart
  //     .map((item) => item.price * item.qty)
  //     .reduce((total, current) => total + current);

  const closeModalHandler = () => {
    props.onClose((prev) => !prev);
  };

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeModalHandler} className={classes["button--alt"]}>
          Close
        </button>
        <button
          onClick={() => console.log("ordering...")}
          className={classes.button}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
