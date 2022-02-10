import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SkinProduct.scss';

function SkinProduct({ name, id, detail, image }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/skin/products/${id}`);
  };
  return (
    <div className="product" onClick={goToDetail}>
      <img className="productImage" src={image} alt={name} />

      <div className="subcatProductsDetailList">
        <div className="productsDetail">
          <p className="productsName">{name}</p>
          <div className="productsDetailDescription">
            {detail.length === 1 ? (
              <>
                <span className="size">{detail[0].size} </span>
                <span> /</span>
                <span className="price">
                  <span> ₩ </span>
                  {(+detail[0].price).toLocaleString()}
                </span>
              </>
            ) : (
              <>
                <span className="size">2 사이즈</span>
                <span> /</span>
                <span className="price">
                  <span> ₩ </span>
                  {(+detail[0].price).toLocaleString()} 원부터
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinProduct;
