import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
export default function Product() {
  const [products, setProducts] = useState([]);

  const apiData = async function () {
    const response = await fetch("https://fakestoreapi.com/products/");
    const jsonData = await response.json();
    setProducts(jsonData);
  };
  useEffect(() => {
    apiData();
  }, []);
  console.log(products);

  return (
    <div className="app">
      <div className="products">
        <ul className="list">
          {products.map((product) => (
            <ProductList product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}
