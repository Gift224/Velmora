import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./CheckOut.css";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Define initial form state
  const initialForm = {
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  };

  const [form, setForm] = useState(initialForm);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // ✅ Create order object
      const newOrder = {
        id: Date.now(),
        items: cart,
        total: totalPrice,
        customer: form,
        status: "Paid",
        date: new Date().toLocaleString(),
      };

      console.log("Order submitted:", newOrder);

      // ✅ Save to localStorage
      const existingOrders =
        JSON.parse(localStorage.getItem("orders")) || [];

      localStorage.setItem(
        "orders",
        JSON.stringify([...existingOrders, newOrder])
      );

      // ✅ Clear form
      setForm(initialForm);

      // ✅ Clear cart
      clearCart();

      setLoading(false);

      // ✅ Send order to success page
      navigate("/success", { state: newOrder });

    }, 1000);
  }


  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-wrapper">
        {/* FORM */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {loading ? "Processing..." : "Place Order"}
          </button>
        </form>

        {/* ORDER SUMMARY */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="summary-item">
                <p>{item.title}</p>
                <p>
                  ₦{item.price.toLocaleString("en-NG")} x {item.quantity || 1}
                </p>
              </div>
            ))
          )}

          <hr />
          <h4>Total: ₦{totalPrice.toLocaleString("en-NG")}</h4>
        </div>
      </div>
    </div>
  );
}
