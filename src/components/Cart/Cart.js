import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const cart = [{ name: "Schnitzel", price: 16.5, qty: 2, id: "m2" }];
  const cartList = cart.map((item) => <CartItem key={item.id} item={item} />);
  const cartTotal = cart
    .map((item) => item.price * item.qty)
    .reduce((total, current) => total + current);

  return (
    <>
      <div>
        <ul className={classes["cart-items"]}>{cartList}</ul>
      </div>
      <div>
        <h3>Total Amount</h3>
        <span>{`$${cartTotal}`}</span>
      </div>
    </>
  );
};

export default Cart;
