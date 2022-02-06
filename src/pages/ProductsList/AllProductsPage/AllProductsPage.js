import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubcatNav from '../SubcatNav/SubcatNav';
import SkinProductsList from '../SkinProductsList/SkinProductsList';
import TwoColumnsPromotion from '../../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import { INFORMATION } from './informationData';
import './AllProductsPage.scss';

function AllProductsPage() {
  const [skinProducts, setSkinProducts] = useState([]);

  useEffect(() => {
    fetch('http://172.30.1.24:8000/skin')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSkinProducts(data.message);
        }
      });
  }, []);

  // useEffect(() => {
  //   fetch('/data/skin.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         setSkinProducts(data);
  //       }
  //     });
  // }, []);

  return (
    <div className="productsList">
      <div className="headerTitle">
        <Link to="/">
          <img
            src="/images/logo-darkgray.png"
            alt="wesopLogo"
            className="wesopLogo"
          />
        </Link>
      </div>

      <div className="categoryTitle">
        <h1 className="categoryTitleHeader"> 스킨 </h1>
      </div>

      <SubcatNav skinProducts={skinProducts} />

      <div className="productsListMain">
        <SkinProductsList skinProducts={skinProducts} />
      </div>

      <div className="information">
        {INFORMATION.map(promotion => (
          <TwoColumnsPromotion
            key={promotion.idx}
            isTextOnLeft={promotion.isTextOnLeft}
            isContentImg={promotion.isContentImg}
            subTitle={promotion.subTitle}
            heading={promotion.heading}
            paragraph={promotion.paragraph}
            btnText={promotion.btnText}
            btnLink={promotion.btnLink}
            alt={promotion.alt}
            src={promotion.src}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
