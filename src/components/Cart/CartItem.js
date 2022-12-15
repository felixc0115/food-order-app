import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{item.price}</span>
          <span className={classes.amount}>{item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
