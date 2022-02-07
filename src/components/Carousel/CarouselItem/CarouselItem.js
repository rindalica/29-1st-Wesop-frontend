import React from 'react';
import { Link } from 'react-router-dom';
import './CarouselItem.scss';

const CarouselItem = ({
  heading,
  description,
  alt,
  src,
  isLoop,
  link,
  isListPage,
  detail,
}) => {
  return (
    <div className="CarouselItem">
      <Link to={isLoop ? '/' : `/skin/products/${link}`}>
        <div className="itemImg">
          <img alt={alt} src={src} />
        </div>

        {isLoop ? null : (
          <div className="textWrapper">
            <h5>{heading}</h5>

            {isListPage ? (
              <div>{/* <CarouselProductDetail detail={detail} /> */}</div>
            ) : (
              <div className="description">{description}</div>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};

export default CarouselItem;
