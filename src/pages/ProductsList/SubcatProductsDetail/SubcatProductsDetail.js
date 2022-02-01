import React, { useState, useEffect } from 'react';
import './SubcatProductsDetail.scss';

function SubcatProductsDetail({ productList }) {
  const addToCart = e => {
    return (e.target.style.background = '#EBEADE');
  };

  const changeToDefault = e => {
    return (e.target.style.background = '#FFFEF2');
  };
  return (
    <div
      className="productContainer"
      onMouseOver={addToCart}
      onMouseOut={changeToDefault}
    >
      <div className="productList">
        {productList &&
          productList.map(product => {
            return product.categoryDetailDescriptionHeader ? (
              <div className="product">
                <h1>{product.categoryDetailDescriptionHeader}</h1>
                <p>{product.categoryDetailDescription}</p>
              </div>
            ) : (
              <div className="product" key={product.id}>
                <img
                  className="productImage"
                  src={product.src}
                  alt={product.productName}
                />
                <div className="subcatProductsDetailList">
                  <div className="productsDetail">
                    <p className="productsName">{product.productName}</p>
                    <div className="productsDetailDescription">
                      <span className="size">{product.productSize}</span>
                      <span>ml /</span>
                      <span className="price">
                        <span> ₩ </span>
                        {product.productPrice}
                      </span>
                    </div>
                  </div>

                  <div class="SubcatProductsDetails">
                    <ul class="SubcatProductsDetailsList">
                      <li class="SubcatProductsDetailsListItem">
                        <div class="SubcatProductsDetailsTitle">피부 타입</div>
                        <div class="SubcatProductsDetailsContent">
                          {product.skinType}
                        </div>
                      </li>
                      <li class="SubcatProductsDetailDetailslistItem">
                        <div class="SubcatProductsDetailDetailsTitle">
                          사용감
                        </div>
                        <div class="SubcatProductsDetailDetailsContent">
                          {product.texture}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SubcatProductsDetail;
