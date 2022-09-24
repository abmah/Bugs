import React from "react";
import "./product.css";
import ProductList from "./ProductList";
export default function Product() {
  const listOfProducts = ProductList.map((product) => {
    return (
      <div className="product" key={product.id}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <div className="product-name">{product.name}</div>
          <div className="product-price">{product.price}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-status">{product.status}</div>
          <div className="product-quantity">{product.quantity}</div>
        </div>
      </div>
    );
  });

  return <div>{listOfProducts}</div>;
}
