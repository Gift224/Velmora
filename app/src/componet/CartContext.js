

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id && item.category === product.category
      );

      if (existingItem) {
        // Increase quantity if already exists
        return prevCart.map((item) =>
          item.id === product.id && item.category === product.category
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      // Add new product
      return [...prevCart, product];
    });
  };

  // ✅ UPDATE QUANTITY
  const updateQuantity = (id, category, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.category === category
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  // ✅ REMOVE ITEM
  const removeFromCart = (id, category) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === id && item.category === category)
      )
    );
  };

  // ✅ CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

