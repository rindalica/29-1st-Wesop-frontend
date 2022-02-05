import React, { useState, useEffect } from 'react';
import SubcatNav from '../SubcatNav/SubcatNav';
import SkinProductsList from '../SkinProductsList/SkinProductsList';
import Carousel from '../Carousel/Carousel';
import './AllProductsPage.scss';

function AllProductsPage() {
  const [skinProducts, setSkinProducts] = useState([]);

  // useEffect(() => {
  //   fetch('http//172.30.1.32:8000/skin')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         setskinProducts(data.message);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    fetch('/data/skin.json')
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

      <div className="categoryTitle">
        <h1 className="categoryTitleHeader"> 스킨 </h1>
      </div>

      <SubcatNav skinProducts={skinProducts} />

      <div className="productsListMain">
        <SkinProductsList skinProducts={skinProducts} />
      </div>

      <div className="carousel">
        <Carousel skinProducts={skinProducts} />
      </div>
    </div>
  );
}

export default AllProductsPage;
