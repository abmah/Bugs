import React from "react";
import { useInView } from "react-intersection-observer";
export default function SingleProduct({ product }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div className="product" key={product.id}>
      <div className="product-image-container">
        <img
          style={{
            width: product.id % 2 === 0 ? "70vw" : "60vw",
          }}
          ref={ref}
          className={`product-image ${inView ? "image-animation" : ""}`}
          src={product.image}
          alt={product.name}
        />

        <div className="product-details">
          <div className="product-name">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">
            Price: <span className="price-highlight">{product.price}</span>
          </div>
          <div className="product-status">{product.status}</div>
          <div className="product-quantity">quantity: {product.quantity}</div>
          <button className="add-to-cart-button">add to cart</button>
        </div>
      </div>
    </div>
  );
}
