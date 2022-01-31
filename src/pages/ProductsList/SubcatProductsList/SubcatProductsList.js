import React, { useState, useEffect } from 'react';
import SubcatNav from '../SubcatNav/SubcatNav';
import SubcatIntro from '../SubcatIntro/SubcatIntro';
import './SubcatProductsList.scss';

function AllProductsList() {
  const [list, setLists] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setLists(data);
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
      <SubcatNav />

      {/* 상품 리스트 */}
    </div>
  );
}

export default AllProductsList;
