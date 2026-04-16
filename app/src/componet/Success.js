import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Success.css";

export default function Success() {
  const location = useLocation();
  const order = location.state;

  if (!order) {
    return <h2>No Order Found</h2>;
  }

  return (
    <div className="success-page">
      <div className="success-card">

        <div className="success-icon">✓</div>

        <h1>Order Successful!</h1>
        <p>Your order has been placed successfully.</p>

        <div className="order-info">
          <p><strong>Order ID:</strong> #{order.id}</p>
          <p><strong>Total:</strong> ₦{order.total.toLocaleString("en-NG")}</p>
          <p><strong>Name:</strong> {order.customer.name}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>

        <div className="success-buttons">
          <Link to="/" className="btn home-btn">Go Home</Link>
          <Link to="/orders" className="btn order-btn">View Orders</Link>
        </div>

      </div>
    </div>
  );
}
