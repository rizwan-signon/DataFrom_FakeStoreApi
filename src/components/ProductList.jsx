import React from "react";
export default function ProductList({ product }) {
  return (
    <li key={product.id}>
      <div className="left">
        <div
          className="image"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        ></div>

        <div className="details">
          <h2 className="title">{product.title}</h2>
          <h3>{product.catagory}</h3>
          <h2 className={product.price < 30 ? "blue" : "soldout"}>
            Price : {product.price}
          </h2>

          <h2 className="blue"> Rating:{product.rating.rate}</h2>
        </div>
      </div>
      <div className="right">
        <p>{product.description}</p>
      </div>
    </li>
  );
}
