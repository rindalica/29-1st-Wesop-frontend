import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SubcatNav from './SubcatNav/SubcatNav';
import SkinProductsList from './SkinProductsList/SkinProductsList';
import SubcatProductsList from './SubcatProductsList/SubcatProductsList';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import Footer from '../../components/Footer/Footer';
import { api } from '../../config';
import { INFORMATION } from './informationData';
import './ProductsList.scss';

function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [subcategoryProductsList, setSubcategoryProductsList] = useState([]);

  // 데이터 로딩(쿼리스트링)

  // console.log(location);

  // const location = useLocation();
  // const queryString = location.search;

  // useEffect(() => {
  //   fetch(`${api.allProducts}${queryString}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         setProductsList(data.message);
  //       }
  //     });
  // }, []);

  // console.log(queryString);

  useEffect(() => {
    fetch(`/data/skin1.json`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setProductsList(data);
        }
      });
  }, []);

  // useEffect(() => {
  //   fetch(`/data/skin.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         setSubcategoryProductsList(data);
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

      <SubcatNav productsList={productsList} />

      {queryString.length > 0 ? (
        <SkinProductsList productsList={productsList} />
      ) : (
        <SubcatProductsList subcategoryProductsList={subcategoryProductsList} />
      )}

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

      <Footer />
    </div>
  );
}

export default ProductsList;
