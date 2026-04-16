import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderDetails.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  function deleteOrder(id) {
    //const confirmDelete = window.confirm("Delete this order?");
    //if (!confirmDelete) return;

    const updatedOrders = orders.filter((order) => order.id !== id);

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  }

  if (orders.length === 0) {
    return <h2 className="empty">No orders yet.</h2>;
  }

  return (
    <div className="orders-page">
      <div className="order-top">
        <Link to="/"><h4>Home</h4></Link>
      </div>
      <h2 className="page-title">Your Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h3>Order #{order.id}</h3>
          <p>Date: {order.date}</p>
          <p>Total: ₦{order.total.toLocaleString("en-NG")}</p>
          <p>Status: {order.status}</p>

          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`/orders/${order.id}`}>
              <button className="view-btn">View</button>
            </Link>

            <button
              className="delete-btn"
              onClick={() => deleteOrder(order.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
