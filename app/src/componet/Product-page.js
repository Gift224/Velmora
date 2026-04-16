

import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./Product";
import "./Product-page.css";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  // ✅ Hooks must be here
  const [mainImage, setMainImage] = useState(
    product ? product.images[0] : ""
  );
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  // ✅ Now you can check
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="image-section">
          <img src={mainImage} alt="Product" className="main-image" />

          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className="thumbnail"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="details-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">₦{product.price}</p>
          <p className="product-description">{product.description}</p>

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

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}




/*import { useState } from "react";
import "./Product-page.css"
import img1 from "../asset/Apple iphone 17 Pro Max.jpg";
import img2 from "../asset/Apple iphone 16 pro max.jpg";
import img3 from "../asset/Apple Watch ultra 2.jpg";


export default function ProductPage() {
  const images = [img1, img2, img3];


  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  return (
    <div className="product-page">
      <div className="product-container">
        { LEFT: Images }
        <div className="image-section">
          <img src={mainImage} alt="Product" className="main-image" />

          <div className="thumbnail-row">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className="thumbnail"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Details }
        <div className="details-section">
          <h1 className="product-title">Velmora Premium Travel Bag</h1>
          <p className="product-price">₦45,000</p>

          <p className="product-description">
            This Velmora premium travel bag is designed for style and durability.
            Perfect for everyday use, travel, and fashion. Built with high-quality
            material and spacious compartments.
          </p>

          {/* Size }
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

          {/* Quantity }
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

          {/* Add to Cart }
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}*/
