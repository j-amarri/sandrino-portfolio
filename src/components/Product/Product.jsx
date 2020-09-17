import React from 'react';
import './Product.css';

const Product = props => {
  return (
    <div>
      <img className="product-image" src="/placeholder.png" alt="" />
      <h3>{props.title}</h3>
      <p>{props.skills}</p>
    </div>
  );
};

export default Product;
