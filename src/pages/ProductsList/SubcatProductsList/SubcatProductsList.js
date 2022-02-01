import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubcatNav from '../SubcatNav/SubcatNav';
import SubcatProductsDetail from '../SubcatProductsDetail/SubcatProductsDetail';
import SubcatProductsIntro from '../SubcatProductsIntro/SubcatProductsIntro';

import './SubcatProductsList.scss';

function AllProductsList() {
  const [lists, setLists] = useState([]);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setLists(data);
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
      <SubcatNav lists={lists} />

      {/* 상품 리스트 */}
      <div className="productsListMain">
        {/* <SubcatProductsIntro lists={lists} /> */}
        <SubcatProductsDetail productList={lists.productList} />
      </div>
    </div>
  );
}

export default AllProductsList;
