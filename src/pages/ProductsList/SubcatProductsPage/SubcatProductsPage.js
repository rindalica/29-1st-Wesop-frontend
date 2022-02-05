import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubcatNav from '../SubcatNav/SubcatNav';
import SubcatProductsList from '../SubcatProductsList/SubcatProductsList';

import './SubcatProductsPage.scss';

function SubcatProductsPage() {
  const [subcategories, setSubcategories] = useState([]);
  const [skinProducts, setSkinProducts] = useState([]);
  const params = useParams();

  // useEffect(() => {
  //   fetch(`http/172.30.1.32:8000/skin/categories/${params.subcatId}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         setskinProducts(data.message);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    fetch(`/data/skin.json`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSubcategories(data);
        }
      });
  }, []);

  useEffect(() => {
    fetch(`/data/category/1.json`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSkinProducts(data);
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
      <SubcatNav skinProducts={subcategories} />

      {/* 상품 리스트 */}
      <SubcatProductsList skinProducts={skinProducts} />
    </div>
  );
}

export default SubcatProductsPage;
