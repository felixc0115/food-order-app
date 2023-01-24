import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount +
      action.payload.item.price * action.payload.item.amount;
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.payload.item];
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    let existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    let existingCartItem = state.items[existingCartItemIndex];
    let updatedItem = {
      ...existingCartItem,
      amount: existingCartItem.amount - 1,
    };
    let updatedItems = [...state.items];
    updatedItems[existingCartItemIndex] = updatedItem;
    updatedItems = updatedItems.filter((item) => item.amount > 0);
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      payload: {
        item: item,
      },
    });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: { id: id } });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
