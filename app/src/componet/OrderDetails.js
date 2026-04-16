import React from "react";
import { useParams } from "react-router-dom";
import "./OrderDetails.css"
import { Link } from "react-router-dom";

export default function OrderDetails() {
  const { id } = useParams();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((o) => o.id.toString() === id);

  if (!order) return <h2>Order not found</h2>;

  return (
    <div className="order-details-page">
      <div className="order-top">
        <Link to="/"><h4>Home</h4></Link>
        <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></span>
        <Link to="/orders"><h4>Orders</h4></Link>
      </div>
      <h2 className="page-title">Order #{order.id}</h2>

      <div className="order-items">
        {order.items.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.images[0]} alt="" />

            <div className="item-info">
              <h4>{item.description}</h4>
              <p>₦{item.price.toLocaleString("en-NG")}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Total: ₦{order.total.toLocaleString("en-NG")}</h3>
      </div>
    </div>

  );
}
