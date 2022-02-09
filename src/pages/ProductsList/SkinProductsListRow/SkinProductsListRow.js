import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SkinProduct from '../SkinProduct/SkinProduct';
import './SkinProductsListRow.scss';

function SkinProductsListRow({
  id,
  setCategoryId,
  name,
  description,
  productsList,
}) {
  const navigate = useNavigate();
  const goToCatagory = () => {
    const queryString = `?categoryId=${id}`;
    navigate(queryString);
    setCategoryId(queryString);
    window.location.reload();
  };

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

        <div className="button" onClick={goToCatagory}>
          {name} 모두 보기
          <i className="fas fa-arrow-right" />
        </div>
      </div>

      <div className="subcatCarousel">
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
                key={product.product_id}
                name={product.product_name}
                detail={product.product_detail}
                image={product.product_image_url}
              />
            ))}

          {/* 카테고리가 같은 제품끼리 어떻게 한 줄로 묶지? */}
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
