import React from "react";
import { useContext } from "react";
import "./cart.css";
import { CartContext } from "./context/CartContext";
export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);

  const isThereItems = cartItems.length === 0 && (
    <div className="cart">no items in cart</div>
  );
  return (
    <div>
      {isThereItems}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          {item.name}
        </div>
      ))}
    </div>
  );
}
