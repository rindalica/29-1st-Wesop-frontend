import React from 'react';
import SubcatProductsIntro from '../SubcatProductsIntro/SubcatProductsIntro';
import SubcatProduct from '../SubcatProduct/SubcatProduct';
import './SubcatProductsList.scss';

function SubcatProductsList({ subcatProducts }) {
  const addToCart = e => {
    return (e.target.style.background = '#EBEADE');
  };

  const changeToDefault = e => {
    return (e.target.style.background = '#FFFEF2');
  };

  return (
    <div className="subcatProductsListMain">
      <div className="productContainer">
        {subcatProducts[0] && (
          <SubcatProductsIntro
            category={subcatProducts[0].sub_category_name}
            description={subcatProducts[0].sub_category_description}
          />
        )}
        {/* 질문 : 왜 skinProduct로 하면 안되고 이렇게 배열 안에 숫자를 써주면 되는가?*/}
      </div>

      {subcatProducts &&
        subcatProducts.map(product => {
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
    </div>
  );
}

export default SubcatProductsList;
