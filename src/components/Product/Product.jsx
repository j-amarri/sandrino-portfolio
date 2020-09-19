import React, { useState } from 'react';
import './Product.css';

const Product = props => {
  const [isShown, setIsShown] = useState(false);
  const productImage = {
    height: '350px',
    width: '350px',
    backgroundImage: 'url(' + props.image + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    marginBottom: '20px',
    boxShadow: '10px 10px #585123'
  };

  return (
    <div>
      <div
        style={productImage}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <div class="overlay">
            <p className="product-hover-text">{props.description}</p>
          </div>
        )}
      </div>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-tags">{props.skills}</p>
    </div>
  );
};

export default Product;
