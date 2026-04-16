
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css"

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formattedTotal = totalPrice.toLocaleString("en-NG");

  return (
    <div className="cart-page">
      
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-container">
              <Link
                  to={`/product/${item.category}/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
              >
              <div className="cart-item">
                <img src={item.images[0]} alt={item.description} width="80" />
                
                <div>
                  <h4>{item.description}</h4>
                  <p>Price: ₦{item.price.toLocaleString("en-NG")}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              </Link>
              <div className="cart-button">
                <button onClick={() => removeFromCart(item.id, item.category)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: ₦{formattedTotal}</h3>
          <Link to="/checkout">
            <button className="add-to-cart">Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}
