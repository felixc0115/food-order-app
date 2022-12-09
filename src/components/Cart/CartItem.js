import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <span>{item.qty}</span>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
