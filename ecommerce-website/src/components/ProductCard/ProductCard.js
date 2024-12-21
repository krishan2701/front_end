// src/components/ProductCard/ProductCard.js

import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
