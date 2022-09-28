import React, { useState } from "react";
const CartContext = React.createContext();

function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, cartAmount, setCartAmount }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
export { CartContext, CartContextProvider };
