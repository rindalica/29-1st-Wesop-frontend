import React, { useState } from 'react';
import SkinProduct from '../SkinProduct/SkinProduct';
import './SkinProductsListRow.scss';

function SkinProductsListRow({ className, name, description, productsList }) {
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
          style: { transform: 'translateX(-100px)' },
        }
      : null;

  const lastSlide =
    slideIndex === productsList.length - 3
      ? {
          style: { transform: 'translateX(100px)' },
        }
      : null;
  return (
    <div className="skinProductsListRow">
      <div className="skinSubcatIntro">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      {/* {productsList &&
        productsList.map(product => {
          return (
            <SkinProduct
              key={product.product_name}
              name={product.product_name}
              detail={product.product_detail}
            />
          );
        })} */}
      <div className={`subcatCarousel ${className}`}>
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
          {productsList &&
            productsList.map(product => (
              <SkinProduct
                key={product.product_name}
                name={product.product_name}
                detail={product.product_detail}
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
      </div>
    </div>
  );
}

export default SkinProductsListRow;
