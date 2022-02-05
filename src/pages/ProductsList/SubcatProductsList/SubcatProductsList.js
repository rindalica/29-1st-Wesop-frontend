import React, { useState, useEffect } from 'react';
import SubcatProductsIntro from '../SubcatProductsIntro/SubcatProductsIntro';
import SubcatProduct from '../SubcatProduct/SubcatProduct';
import './SubcatProductsList.scss';

function SubcatProductsList({ skinProducts }) {
  const addToCart = e => {
    return (e.target.style.background = '#EBEADE');
  };

  const changeToDefault = e => {
    return (e.target.style.background = '#FFFEF2');
  };

  return (
    <div className="subcatProductsListMain">
      <div className="productContainer">
        {skinProducts[0] && (
          <SubcatProductsIntro
            category={skinProducts[0].sub_category_name}
            description={skinProducts[0].sub_category_description}
          />
        )}
        {/* 질문 : 왜 skinProduct로 하면 안되고 이렇게 배열 안에 숫자를 써주면 되는가?*/}
      </div>

      {skinProducts &&
        skinProducts.map(product => {
          return (
            <SubcatProduct
              key={product.name}
              name={product.name}
              detail={product.product_detail}
              skinType={product.skin_type}
              keyIngredient={product.key_ingredient}
            />
          );
        })}
      {/* </div> */}
    </div>
  );
}

export default SubcatProductsList;
