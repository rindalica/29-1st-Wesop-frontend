import React, { useState, useEffect } from 'react';
import SubcatNav from '../SubcatNav/SubcatNav';
import SkinProductsList from '../SkinProductsList/SkinProductsList';
import './AllProductsPage.scss';

function AllProductsPage() {
  const [skinProducts, setskinProducts] = useState([]);

  useEffect(() => {
    fetch('/data/skin.json')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setskinProducts(data);
        }
      });
  }, []);

  useEffect(() => {
    console.log(skinProducts);
  }, [skinProducts]);

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
        <SkinProductsList skinProducts={skinProducts} />
      </div>
    </div>
  );
}

export default AllProductsPage;
