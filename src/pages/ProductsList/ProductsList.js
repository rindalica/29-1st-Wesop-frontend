import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SubcatNav from './SubcatNav/SubcatNav';
import SkinProductsList from './SkinProductsList/SkinProductsList';
import SubcatProductsList from './SubcatProductsList/SubcatProductsList';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import { api } from '../../config';
import { INFORMATION } from './informationData';
import './ProductsList.scss';

function ProductsList() {
  const [categoryId, setCategoryId] = useState(null);
  const [productsList, setProductsList] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  let _showPage = function () {
    let loader = document.getElementById('loader');
    let container = document.getElementById('container');
    loader.css('display', 'none');
    container.css('display', 'block');
  };

  // 데이터 로딩(쿼리스트링)
  // const location = useLocation();
  // const queryString = location.search;

  // useEffect(() => {
  //   setCategoryId(queryString ? queryString : 0);
  //   console.log(categoryId);
  // }, []);

  // useEffect(() => {
  //   console.log(categoryId);
  //   if (categoryId === null) return;

  //   if (categoryId) {
  //     fetch(`${api.allProducts}${categoryId}`)
  //       .then(res => res.json())
  //       .then(data => setProductsList(data.message));
  //     console.log(productsList);
  //   } else {
  //     fetch(`${api.allProducts}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         data = data.message;
  //         if (data.length > 0) {
  //           const maxSubCategoryNum = data[data.length - 1].sub_category_id;
  //           const dataArr = [];

  //           for (let i = 1; i <= maxSubCategoryNum; i++) {
  //             const subCategoryData = data.filter(
  //               data => data.sub_category_id === i
  //             )[0];
  //             const products = data
  //               .filter(data => data.sub_category_id === i)
  //               .map(data => data.products);
  //             subCategoryData.products = products;
  //             dataArr.push(subCategoryData);
  //           }
  //           setProductsList(dataArr);
  //         }
  //       });
  //   }
  // }, [categoryId]);

  // useEffect(() => {
  //   fetch(`${api.allProducts}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       data = data.message;
  //       if (data.length > 0) {
  //         const maxSubCategoryNum = data[data.length - 1].sub_category_id;
  //         const dataArr = [];

  //         for (let i = 1; i <= maxSubCategoryNum; i++) {
  //           const subCategoryData = data.filter(
  //             data => data.sub_category_id === i
  //           )[0];
  //           const products = data
  //             .filter(data => data.sub_category_id === i)
  //             .map(data => data.products);
  //           subCategoryData.products = products;
  //           dataArr.push(subCategoryData);
  //         }
  //         setSubcategory(dataArr);
  //       }
  //     }, []);
  // }, []);
  // check: 데이터 통신할 때 위 코드 주석 풀 것

  useEffect(() => {
    fetch(`/data/skin.json`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setProductsList(data);
        }
      });
  }, []);

  const queryString = [1, 2, 3];
  // check: 데이터 통신할 때 지워둘 것

  return (
    <div className="productsList">
      <div id="loader">
        <div className="headerTitle">
          <Link to="/">
            <img
              src="/images/logo-darkgray.png"
              alt="wesopLogo"
              className="wesopLogo"
            />
          </Link>
        </div>

        <img src="/images/products/loading.gif" alt="로딩" />
      </div>

      <div id="container" style="display: none">
        <div className="categoryTitle">
          <h1 className="categoryTitleHeader"> 스킨 </h1>
        </div>

        <SubcatNav setCategoryId={setCategoryId} subcategory={subcategory} />

        {categoryId ? (
          <SubcatProductsList productsList={productsList} />
        ) : (
          <SkinProductsList
            setCategoryId={setCategoryId}
            productsList={productsList}
          />
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
      </div>
    </div>
  );
}

export default ProductsList;
