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
    opacity: '0.5',
    marginBottom: '20px'
  };

  // function changeBackground(event) {
  //   event.target.style.background = 'red';
  // }

  return (
    <div>
      <div
        style={productImage}
        //onMouseOver={changeBackground}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && <p className="product-hover-text">{props.description}</p>}
      </div>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-tags">{props.skills}</p>
    </div>
  );
};

export default Product;
