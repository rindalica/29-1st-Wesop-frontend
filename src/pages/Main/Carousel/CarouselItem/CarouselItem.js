import React from 'react';
import { Link } from 'react-router-dom';
import './CarouselItem.scss';

const CarouselItem = ({ link, heading, description, alt, src }) => {
  return (
    <div className="CarouselItem">
      <Link to={link || '/'}>
        <div className="itemImg">
          <img alt={alt} src={src} />
        </div>
        <div className="textWrapper">
          <h5>{heading}</h5>
          <div className="description">{description}</div>
        </div>
      </Link>
    </div>
  );
};

export default CarouselItem;
