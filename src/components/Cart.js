import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); //More efficient

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl"> Cart </h1>
      {cartItems.length === 0 && (
        <h2> Cart is empty. Add items to the cart.</h2>
      )}
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 && <button
          className="bg-red-950 p-2 m-2 text-white rounded"
          onClick={handleClearCart}>
          Clear Cart
        </button>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
