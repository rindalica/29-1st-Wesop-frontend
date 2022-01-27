import React, { useState } from 'react';
import CarouselItem from './CarouselItem/CarouselItem';
import './Carousel.scss';

const Carousel = ({ className, dataList }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const onClick = event => {
    if (event.target.className.includes('prev')) {
      setSlideIndex(curr => --curr);
    }
    if (event.target.className.includes('next')) {
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
    slideIndex === dataList.length - 3
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
        {dataList &&
          dataList.map(data => (
            <CarouselItem
              key={data.id}
              heading={data.heading}
              description={data.description}
              alt={data.alt}
              src={data.src}
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
            width: `calc(100% / ${dataList.length - 2})`,
            transform: `translateX(calc(100% * ${slideIndex}))`,
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
