import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem/CarouselItem';
import './Carousel.scss';

const Carousel = ({ className, dataList }) => {
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

  useEffect(() => {
    console.log(dataList);
  }, []);

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
          dataList.map((data, index) => (
            <CarouselItem
              key={index}
              heading={data.name}
              description={data.description}
              alt={data.name}
              src="https://images.unsplash.com/photo-1573575154488-f88a60e170df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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
            width: `calc(100% / ${dataList.length - 2})`,
            transform: `translateX(calc(100% * ${slideIndex}))`,
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
