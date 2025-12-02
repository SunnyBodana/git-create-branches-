import React from "react";
import "./style.css"

const Product = () => {
  return (
    <div className="page-container">
      <h2 className="title">Products</h2>

      <div className="product-grid">
        <div className="product-card">
          <h3>Product 1</h3>
          <p>Short description of the product.</p>
          <button className="btn">Buy</button>
        </div>

        <div className="product-card">
          <h3>Product 2</h3>
          <p>Short description of the product.</p>
          <button className="btn">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
