import React, { useState } from "react";
import "./styles.css";

const Product = () => {
  const products = [
    { id: 1, name: "Keyboard", price: 799 },
    { id: 2, name: "Mouse", price: 499 },
    { id: 3, name: "Headphones", price: 1299 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="page-box">
      <h2 className="title">Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button className="btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-box">
        <h3>Cart Items: {cart.length}</h3>
        {cart.map((c, i) => (
          <p key={i}>• {c.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Product;
