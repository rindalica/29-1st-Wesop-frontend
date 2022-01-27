import React from 'react';
import CarouselItem from './CarouselItem/CarouselItem';
import './Carousel.scss';

const Carousel = ({ dataList }) => {
  return (
    <div className="Carousel">
      <div className="container">
        <button>
          <i className="fas fa-chevron-left" />
        </button>
        <div className="contentWrapper">
          {dataList &&
            dataList.map(data => (
              <CarouselItem
                key={data.idx}
                heading={data.heading}
                description={data.description}
                alt={data.alt}
                src={data.src}
              />
            ))}
        </div>
        <button>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
