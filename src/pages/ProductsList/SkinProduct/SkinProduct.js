import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SkinProduct.scss';

function SkinProduct({ name, detail, image }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/skin/products/${detail[0].product_id}`);
  };
  return (
    <div className="product" onClick={goToDetail}>
      <img className="productImage" src={image} alt={name} />
      {/* 추후 product 데이터에 img src 추가되면 그 때 다시 작업해주는 걸로 */}
      <div className="subcatProductsDetailList">
        <div className="productsDetail">
          <p className="productsName">{name}</p>
          <div className="productsDetailDescription">
            {/* 삼항 연산자 */}
            {/* {
              (detail.length = 1 ? (
                <> */}
            <span className="size">{detail[0].size} </span>
            <span> /</span>
            <span className="price">
              <span> ₩ </span>
              {(+detail[0].price).toLocaleString()}
            </span>
            {/* </>
              ) : (
                <>
                  <span className="size">2 사이즈</span>
                  <span> /</span>
                  <span className="price">
                    <span> ₩ </span>
                    {(+detail[0].price).toLocaleString()} 원부터
                  </span>
                </>
              ))
            } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinProduct;
