import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import SubcatProductsPage from './SubcatProductsPage/SubcatProductsPage';

function ProductsList() {
  const [productsList, setProductsList] = useState([]);

  // 데이터 로딩(쿼리스트링)

  // const location = useLocation();
  // const queryString = location.search;

  // useEffect(() => {
  //   fetch(`api.allProducts${queryString}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data) {
  //         setProductsList(data.message);
  //       }
  //     });
  // }, []);

  const queryString = [1, 2, 3]; //백엔드와 통신하면 지움

  useEffect(() => {
    fetch(`/data/skin.json`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setProductsList(data);
        }
      });
  }, []);

  return (
    <div>
      {queryString.length > 0 ? (
        <AllProductsPage productsList={productsList} />
      ) : (
        <SubcatProductsPage productsList={productsList} />
      )}
    </div>
  );
}

export default ProductsList;
