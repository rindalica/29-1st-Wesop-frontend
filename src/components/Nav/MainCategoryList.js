import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SubCategory from './SubCategory';
function MainCategoryList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('http://10.58.7.109:8000/categories')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setList(data.sub_categories);
      });
  }, []);

  //TODO
  // const location = useLocation();
  // useEffect(() => {
  //   fetch('http:127.0.0.1:8000/skin/products?categoryId=1')
  //     .then(res => res.json())
  //     .then(res =>);
  // }, []);

  return (
    <div className="MainCategoryList">
      <h2 className="MainCategoryListTitle">스킨 케어</h2>
      <ul className="skinCareList">
        <li className="MainCategoryListContents">
          <a href="/">
            <span>스킨 케어 모두 보기</span>
          </a>
        </li>
        {list.map(map => (
          // <li key={map.main_category_id} className="MainCategoryListContents">
          //   <button onClick={clickSubCategory(map.name)}>{map.name}</button>
          // </li>
          <SubCategory key={map.name} name={map.name} />
        ))}
      </ul>
    </div>
  );
}

export default MainCategoryList;
