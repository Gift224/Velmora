



// src/componet/Productphone.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apples } from "./products";
import "./ProductDetail.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";


export default function Productphone() {

  const { addToCart } = useContext(CartContext);


  const { id } = useParams();
  const apple = apples.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  useEffect(() => {
    if (apple) {
      setMainImage(apple.images[0]);
      setQuantity(1);
      setSize("M");
    }
  }, [apple]);

  if (!apple) return <h2>Product not found</h2>;

  return (
    <div className="product-page">
      <div className="product-container">
        {/* IMAGE SECTION */}
        <div className="image-section">
          <img src={mainImage} alt={apple.title} className="main-image" />

          <div className="thumbnail-row">
            {apple.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="thumbnail"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="details-section">
          <h1 className="product-title">{apple.title}</h1>

          <p className="product-price">
            {apple.price.toLocaleString()}
            <span className="old-price">
              {apple.oldprice.toLocaleString()}
            </span>
          </p>

          <p className="product-description">{apple.description}</p>

          {/* SIZE */}
          <div className="size-section">
            <h4>Select Size</h4>
            <div className="sizes">
              {["S", "M", "L"].map((s) => (
                <button
                  key={s}
                  className={size === s ? "size active" : "size"}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="quantity-section">
            <h4>Quantity</h4>
            <div className="quantity-control">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="add-to-cart" onClick={() => addToCart(apple)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
