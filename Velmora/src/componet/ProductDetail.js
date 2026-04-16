

import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { apples, appliances, boosteddeals, electronics, fashions, supermarkets, } from "./products";
import { CartContext } from "./CartContext";
import "./ProductDetail.css";

export function Breadcrumb() {
  const { category, id } = useParams();

  const dataMap = {
    apple: apples,
    appliance: appliances,
    electronic: electronics,
    fashion: fashions,
    supermarket: supermarkets,
    boost: boosteddeals,
  };

  const products = dataMap[category];

  const product = id
    ? products?.find((p) => p.id === Number(id))
    : null;

  return (
    <section className="Breadcrumb">
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        
        {/* HOME */}
        <Link to="/"><h5>Home</h5></Link>

        {/* CATEGORY */}
        {category && (
          <>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span>
            <Link to={`/category/${category}`}>
              <h5 style={{ textTransform: "capitalize" }}>{category}</h5>
            </Link>
          </>
        )}

        {/* PRODUCT (only if exists) */}
        {product && (
          <>
            <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span>
            <h5 className="Breadcrumb-last">{product.title}</h5>
          </>
        )}

      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { category, id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart({ ...product, quantity }); // your add to cart function

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };


  const dataMap = {
    apple: apples,
    appliance: appliances,
    electronic: electronics,
    fashion: fashions,
    supermarket: supermarkets,
    boost: boosteddeals,
  };

  const product = dataMap[category]?.find(
    (p) => p.id === Number(id)
  );

  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
      setQuantity(1);
      setSize("M");
    }
  }, [product]);

  if (!product) return <h2>Product not found</h2>;

  return (
    <main>
      <Breadcrumb />


      <section>
        <div className="product-page">
        <div className="product-container">

        {/* IMAGE SECTION */}
        <div className="image-section">
          <img src={mainImage} alt={product.title} className="main-image" />

          <div className="thumbnail-row">
            {product.images.map((img, i) => (
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
          <h1 className="product-title">{product.title}</h1>

          <p className="product-price">
            ₦{product.price.toLocaleString("en-NG")}
            {product.oldprice && (
              <span className="old-price">
                ₦{product.oldprice.toLocaleString("en-NG")}
              </span>
            )}
          </p>

          <p className="product-description">{product.description}</p>

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

          {console.log(product.category)}
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

          {/* ADD TO CART */}
          <button
            className={`cart-btn ${added ? "added" : ""}`}
            onClick={() =>{
              handleClick();
            }}
          >
            {added ? "✔ Added" : "Add to Cart"}
          </button>
          </div>
        </div>
        </div>
      </section>

    </main>

  );
}
