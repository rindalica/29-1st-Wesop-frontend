import React from 'react';
import './Carousel.scss';

const CarouselProduct = ({ heading, description, src }) => {
  return (
    <div className="CarouselProduct">
      <div className="productImg">
        <img alt="product" src={src} />
      </div>
      <div className="textWrapper">
        <h5>{heading}</h5>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="Carousel">
      <div className="container">
        <button>btn</button>
        <div className="contentWrapper">
          {CAROUSEL_PRODUCTS &&
            CAROUSEL_PRODUCTS.map(product => (
              <CarouselProduct
                key={product.idx}
                heading={product.heading}
                description={product.description}
                src={product.src}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const CAROUSEL_PRODUCTS = [
  {
    idx: 0,
    heading: '파슬리 씨드 안티 옥시던트 페이셜 트리트먼트',
    description: '집중적인 보습으로 피부를 탄탄하게 강화시킵니다.',
    src: 'https://images.unsplash.com/photo-1628088306391-1631cdd36e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    idx: 1,
    heading: '파슬리 씨드 안티 옥시던트 페이셜 트리트먼트',
    description: '집중적인 보습으로 피부를 탄탄하게 강화시킵니다.',
    src: 'https://images.unsplash.com/photo-1628088306391-1631cdd36e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    idx: 2,
    heading: '파슬리 씨드 안티 옥시던트 페이셜 트리트먼트',
    description: '집중적인 보습으로 피부를 탄탄하게 강화시킵니다.',
    src: 'https://images.unsplash.com/photo-1628088306391-1631cdd36e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    idx: 3,
    heading: '파슬리 씨드 안티 옥시던트 페이셜 트리트먼트',
    description: '집중적인 보습으로 피부를 탄탄하게 강화시킵니다.',
    src: 'https://images.unsplash.com/photo-1628088306391-1631cdd36e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    idx: 4,
    heading: '파슬리 씨드 안티 옥시던트 페이셜 트리트먼트',
    description: '집중적인 보습으로 피부를 탄탄하게 강화시킵니다.',
    src: 'https://images.unsplash.com/photo-1628088306391-1631cdd36e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
];

export default Carousel;
