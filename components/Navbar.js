
"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const updateCart = () => {
      const savedCart = localStorage.getItem("cart");
      setCart(savedCart ? JSON.parse(savedCart) : []);
    };

    updateCart();

    window.addEventListener("storage", updateCart);
window.addEventListener("cartUpdated", updateCart);

return () => {
  window.removeEventListener("storage", updateCart);
  window.removeEventListener("cartUpdated", updateCart);
};
  }, []);

  return (
    <nav className="navbar">
      <a href="/" className="brand">Creamy Bliss</a>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/flavors">Flavors</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/cart">🛒 Cart ({cart.length})</a>
      </div>
    </nav>
  );
}
