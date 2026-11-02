
"use client";

import { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>
      <p>Review your favorite flavors before checkout.</p>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
  //     ) : (
        
  //       cart
  // .filter(
  ) : (
  <div className="cart-items">
    {cart
      .filter(
    (flavor, index, items) =>
      items.findIndex((item) => item.name === flavor.name) === index
  )
  .map((flavor) => (
          <div className="cart-item" key={flavor.name}>
            <img src={flavor.image} alt={flavor.name} width="100" />
            <h2>{flavor.name}</h2>
            <p>Rs. {flavor.price}</p>
            
<div className="quantity-controls">
  <button
    type="button"
   onClick={() => {
  const itemIndex = cart.findIndex(
    (item) => item.name === flavor.name
  );

  const updatedCart = cart.filter(
    (_, i) => i !== itemIndex
  );

  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}}

  >
    −
  </button>

<span>
  {cart.filter((item) => item.name === flavor.name).length}
</span>

  <button
    type="button"
  onClick={() => {
  const updatedCart = [...cart, flavor];

  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}}
  >
    +
  </button>
</div>

<button
  type="button"
  className="remove-button"
  onClick={() => {
    const updatedCart = cart.filter(
      (item) => item.name !== flavor.name
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }}
>
  Remove
</button>
          </div>
      //   ))
      // )}
              ))}
  </div>
)}
      {cart.length > 0 && (
  <div className="cart-total">
    <h2>
      Total: Rs.{" "}
      {cart.reduce((total, flavor) => total + flavor.price, 0)}
    </h2>
    <button
  type="button"
  onClick={() => {
    alert("Thank you for choosing Creamy Bliss! This is a demo checkout. No real payment was made.");
    setCart([]);
    localStorage.removeItem("cart");
  }}
>
  Checkout
</button>
  </div>
)}
    </main>
  );
}
