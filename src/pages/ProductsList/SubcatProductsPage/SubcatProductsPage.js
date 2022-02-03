import React, { useState, useEffect } from 'react';
import SubcatNav from '../SubcatNav/SubcatNav';
import SubcatProductsDetail from '../SubcatProductsDetail/SubcatProductsDetail';

import './SubcatProductsPage.scss';

function SubcatProductsPage() {
  const [skinProducts, setskinProducts] = useState([]);

  useEffect(() => {
    fetch(`/data/skin.json`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setskinProducts(data);
        }
      });
  }, []);

  return (
    <div className="productsList">
      <div className="headerTitle">
        <img
          src="/images/logo-darkgray.png"
          alt="wesopLogo"
          className="wesopLogo"
        />
      </div>

      {/* 카테고리 타이틀 */}
      <div className="categoryTitle">
        <h1 className="categoryTitleHeader"> 스킨 </h1>
      </div>

      {/* 카테고리 */}
      <SubcatNav skinProducts={skinProducts} />

      {/* 상품 리스트 */}
      <div className="productsListMain">
        <SubcatProductsDetail skinProducts={skinProducts} />
      </div>
    </div>
  );
}

export default SubcatProductsPage;
