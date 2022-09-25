import React from "react";
import "./product.css";
import ProductList from "./ProductList";
import SingleProduct from "./SingleProduct";
export default function Product() {
  const listOfProducts = ProductList.map((product) => {
    return <SingleProduct product={product} />;
  });

  return <>{listOfProducts}</>;
}
