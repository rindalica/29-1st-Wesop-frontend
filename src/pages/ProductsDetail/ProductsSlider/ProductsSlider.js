import React, { useState } from 'react';
import './ProductsSlider.scss';

function ProductsSlider({ productSlider }) {
  const [current, setCurrent] = useState(0);
  const leftBtn = () => {
    if (current < 0) {
      setCurrent(prev => prev + 300);
    }
  };
  const rightBtn = () => {
    if (current > -(200 * (productSlider.length - 1))) {
      setCurrent(prev => prev - 300);
    }
  };

  return (
    <section className="ProductsSlider">
      <div className="title">
        <h2>함께 사용하기 좋은 제품</h2>
      </div>
      {productSlider.length !== 0
        ? productSlider.map((image, idx) => {
            return (
              <div key={idx}>
                <div
                  className="imageBox"
                  style={{ transform: `translate(${current}px)` }}
                >
                  <img alt="recommend" src={image.products.product_image_url} />
                  <p>{image.sub_category_name}</p>
                  <p>{image.sub_category_description}</p>
                </div>
              </div>
            );
          })
        : null}
      <div className="btnBox">
        <i className="fas fa-angle-left" onClick={leftBtn} />
        <i className="fas fa-angle-right" onClick={rightBtn} />
      </div>
    </section>
  );
}

export default ProductsSlider;
