const CartItem = ({ item }) => {
  return (
    <li>
      <div>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <span>{item.qty}</span>
      </div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
