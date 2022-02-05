import React, { useState } from 'react';
import CarouselItem from '../Carousel/CarouselItem/CarouselItem';
import './Carousel.scss';

const Carousel = ({ className, skinProducts }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onClick = event => {
    const isPrev = event.target.className.includes('prev');
    const isNext = event.target.className.includes('next');
    if (isPrev) {
      setSlideIndex(curr => --curr);
    }
    if (isNext) {
      setSlideIndex(curr => ++curr);
    }
  };

  const firstSlide =
    slideIndex === 0
      ? {
          style: { transform: 'translateX(-80px)' },
        }
      : null;

  const lastSlide =
    slideIndex === skinProducts.length - 7
      ? {
          style: { transform: 'translateX(80px)' },
        }
      : null;

  return (
    <div className={`Carousel ${className}`}>
      <button
        className="navigation prev"
        onClick={onClick}
        style={firstSlide && firstSlide.style}
        disabled={firstSlide}
      >
        <i className="fas fa-chevron-left prev" />
      </button>
      <div
        className="itemWrapper"
        style={{ transform: `translateX(calc(-100% / 3 * ${slideIndex}))` }}
      >
        {skinProducts[0].products &&
          skinProducts[0].products.map(data => (
            <CarouselItem
              key={data.product_name}
              heading={data.product_name}
              // description={data.description}
              // alt={data.alt}
              // src={data.src}
            />
          ))}
      </div>
      <button
        className="navigation next"
        onClick={onClick}
        style={lastSlide && lastSlide.style}
        disabled={lastSlide}
      >
        <i className="fas fa-chevron-right next" />
      </button>
      <div className="pagination">
        <div
          className="current"
          style={{
            width: `calc(100% / ${skinProducts.length - 2})`,
            transform: `translateX(calc(100% * ${slideIndex}))`,
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
