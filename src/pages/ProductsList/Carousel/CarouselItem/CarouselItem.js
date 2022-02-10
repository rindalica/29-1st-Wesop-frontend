import React from 'react';
import './CarouselItem.scss';

const CarouselItem = ({ heading, description, alt, src }) => {
  return (
    <div className="CarouselItem">
      <div className="itemImg">
        <img alt={heading} src="./images/products/product.jpeg" />
      </div>
      <div className="textWrapper">
        <h5>{heading}</h5>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default CarouselItem;
