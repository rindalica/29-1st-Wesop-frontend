import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../../../config';

function SubcatProduct({ name, id, detail, skinType, keyIngredient, image }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/skin/products/${id}`);
  };

  const cartAdd = e => {
    fetch(`${LOGIN_URL}/carts/add`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.WgDrUj6df_iJkOoZ5e_j9x9p-GPwuPq41HTQQ_jlNX8',
      },
      body: JSON.stringify({
        option_id: detail[0].product_option_id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.result === 'SUCCESS') {
          alert('상품이 장바구니에 담겼습니다.');
        } else if (result.result === 'SUCCESS_UPDATE') {
          alert('상품이 장바구니에 또 담겼습니다.');
        }
      });
  };

  return (
    <div className="productContainer">
      <img
        className="subcatProductImage"
        src={image}
        alt={name}
        onClick={goToDetail}
      />
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

        <div className="SubcatProductsDetails">
          <ul className="SubcatProductsDetailsList">
            <li className="SubcatProductsDetailsListItem">
              <div className="SubcatProductsDetailsTitle">피부 타입</div>
              <div className="SubcatProductsDetailsContent">{skinType}</div>
            </li>
            <li className="SubcatProductsDetailsListItem">
              <div className="SubcatProductsDetailsTitle">주요 성분</div>
              <div className="SubcatProductsDetailsContent">
                {keyIngredient}
              </div>
            </li>
          </ul>
        </div>

        <button className="cartBtn" onClick={cartAdd}>
          <span className="cartAdd">카트에 추가</span>
        </button>
      </div>
    </div>
  );
}

export default SubcatProduct;
