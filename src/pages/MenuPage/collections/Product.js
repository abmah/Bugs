import React from "react";
import "./product.css";
import ProductList from "./ProductList";
import SingleProduct from "./SingleProduct";
export default function Product() {
  const listOfProducts = ProductList.map((product, i) => {
    return <SingleProduct key={i} product={product} />;
  });

  return <>{listOfProducts}</>;
}
