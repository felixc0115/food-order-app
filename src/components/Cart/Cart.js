import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
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

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.action}>
        <button className={classes["button--alt"]}></button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
