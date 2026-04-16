

import React from "react";
import { Link } from "react-router-dom";
import { products } from "./productData";

export default function ProductList() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
            <img src={product.images[0]} alt={product.title} width="200" />
            <h3>{product.title}</h3>
            <p>₦{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
