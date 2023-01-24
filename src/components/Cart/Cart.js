import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Cart = (props) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setShowCheckoutForm(true);
  };

  const submitOrderHandler = (userData) => {
    fetch("https://react-http-bcf06-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      {showCheckoutForm && (
        <Checkout onOrder={submitOrderHandler} onCancel={props.onClose} />
      )}
      <div className={classes.actions}>
        {!showCheckoutForm && (
          <button onClick={props.onClose} className={classes["button--alt"]}>
            Close
          </button>
        )}

        {hasItems && !showCheckoutForm && (
          <button onClick={orderHandler} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
