import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { CartContext } from "../../Cart/context/CartContext";
export default function SingleProduct({ product }) {
  const [ref, inView] = useInView({
    threshold: product.id * 0.1,
    delay: product.id * 100,
    triggerOnce: true,
  });

  const { cartItems, setCartItems } = useContext(CartContext);

  function addToCart() {
    setCartItems([...cartItems, product]);
  }
  console.log(cartItems);
  return (
    <div className="product" key={product.id}>
      <div className="product-image-container">
        <img
          // style={{
          //   width: product.id % 2 === 0 ? "30vw" : "30vw",
          // }}
          ref={ref}
          className={`product-image ${inView ? "image-animation" : ""}`}
          src={product.image}
          alt={product.name}
        />

        <div className="product-details">
          <div className="product-name">{product.name}</div>
          <div className="product-price">
            Price: <span className="price-highlight">{product.price}</span>
          </div>
          <div className="product-status">{product.status}</div>
          {/* <div className="product-quantity">quantity: {product.quantity}</div> */}
          <div className="product-description">{product.description}</div>
          <button onClick={addToCart} className="add-to-cart-button">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
