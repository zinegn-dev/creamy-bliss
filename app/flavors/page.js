
"use client";

import { useState, useEffect } from "react";

export default function FlavorsPage() {
  const [activeFilter, setActiveFilter] = useState("All Flavors");
  const [cart, setCart] = useState([]);
  const [addedFlavor, setAddedFlavor] = useState("");
  const flavors = [
    {
      name: "Strawberry Dream",
      category: "Fruit",
      description: "Sweet strawberry ice cream for a happy day.",
      price: 350,
      image: "/flavors/strawberry.webp",
    },
    {
      name: "Chocolate Heaven",
      category: "Chocolate",
      description: "Rich and creamy chocolate ice cream.",
      price: 400,
      image: "/flavors/chocolate.webp",
    },
    {
      name: "Vanilla Cloud",
      category: "Classic",
      description: "Smooth and creamy classic vanilla ice cream.",
      price: 300,
      image: "/flavors/vanilla.webp",
    },
    {
      name: "Minty Fresh",
      category: "Classic",
      description: "Cool mint ice cream with chocolate chips.",
      price: 380,
      image: "/flavors/mint.webp",
    },
    {
      name: "Mango Sunshine",
      category: "Fruit",
      description: "Sweet, fruity mango ice cream.",
      price: 350,
      image: "/flavors/mango.webp",
    },
    {
      name: "Cookie Crunch",
      category: "Chocolate",
      description: "Creamy ice cream with crunchy cookie pieces.",
      price: 420,
      image: "/flavors/cookie.webp",
    },
  ];

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const filteredFlavors =
    activeFilter === "All Flavors"
      ? flavors
      : flavors.filter((flavor) => flavor.category === activeFilter);

  // function addToCart(flavor) {
  //   const updatedCart = [...cart, flavor];
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   window.dispatchEvent(new Event("cartUpdated"));
  // }
   function addToCart(flavor) {
  const updatedCart = [...cart, flavor];

  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  setAddedFlavor(flavor.name);

  window.dispatchEvent(new Event("cartUpdated"));

  setTimeout(() => {
    setAddedFlavor("");
  }, 1500);
}
  return (
    <main>
      <section id="flavors" className="flavors-section">
        <h2>Our Flavors</h2>
        <p>Find your new favorite scoop!</p>

        <div className="flavor-filters">
          {["All Flavors", "Fruit", "Chocolate", "Classic"].map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flavor-grid">
          {filteredFlavors.map((flavor) => (
            <div className="flavor-card" key={flavor.name}>
                          <img
              className="flavor-photo"
              src={flavor.image}
              alt={flavor.name}
              loading="eager"
            />
              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
              <p className="flavor-price">Rs. {flavor.price}</p>
              {/* <button type="button" onClick={() => addToCart(flavor)}>
                Add to Cart
              </button> */}
              <button type="button" onClick={() => addToCart(flavor)}>
                {addedFlavor === flavor.name ? "Added ✓" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
