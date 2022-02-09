import React, { useEffect, useState } from 'react';
import './ProductsSlider.scss';

function ProductsSlider() {
  const [current, setCurrent] = useState(0);

  const leftBtn = () => {
    if (current < 0) {
      setCurrent(prev => prev + 200);
    }
  };
  const rightBtn = () => {
    if (current > -(200 * (imageList.length - 1))) {
      setCurrent(prev => prev - 200);
    }
  };
  // useEffect(() => {
  //   fetch('/data/data.json')
  //     .then(res => res.json())
  //     .then(result => setProduct(result));
  // }, []);

  return (
    <section className="ProductsSlider">
      <div className="title">
        <h2>함께 사용하기 좋은 제품</h2>
      </div>
      {imageList.map(img => {
        return (
          <div
            key={img}
            className="imageBox"
            style={{ transform: `translate(${current}px)` }}
          >
            <img alt="recommend" src={img.img} />
            <p>{img.title}</p>
            <p>{img.description}</p>
          </div>
        );
      })}
      <div className="btnBox">
        <i className="fas fa-angle-left" onClick={leftBtn} />
        <i className="fas fa-angle-right" onClick={rightBtn} />
      </div>
    </section>
  );
}

export default ProductsSlider;

const imageList = [
  {
    img: 'https://picsum.photos/300',
    title: '클렌져',
    description: '피부에 좋아요',
  },
  {
    img: 'https://picsum.photos/300',
    title: '클렌져',
    description: '피부에 좋아요',
  },
  {
    img: 'https://picsum.photos/300',
    title: '클렌져',
    description: '피부에 좋아요',
  },
  {
    img: 'https://picsum.photos/300',
    title: '클렌져',
    description: '피부에 좋아요',
  },
  {
    img: 'https://picsum.photos/300',
    title: '클렌져',
    description: '피부에 좋아요',
  },
  {
    img: 'https://picsum.photos/300',
    title: '클렌져',
    description: '피부에 좋아요',
  },
];
