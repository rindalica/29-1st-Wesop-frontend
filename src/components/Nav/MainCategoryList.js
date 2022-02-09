import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SubCategory from './SubCategory';
function MainCategoryList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch('http://10.58.7.109:8000/categories')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setList(data.sub_categories);
      });
  }, []);

  //TODO //이것도 내가 하는 건가...
  // const location = useLocation();
  // useEffect(() => {
  //   fetch('http:127.0.0.1:8000/skin/products?categoryId=1')
  //fetch('http:127.0.0.1:8000/`location.search`)
  //     .then(res => res.json())
  //     .then(res =>);
  // }, [location,search]);
  const [test, setTest] = useState(0);
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
          <SubCategory
            key={map.id}
            name={map.name}
            onClick={function clickSubCategory() {
              setTest(map.id);
              navigate(`/skin/products?categoryId=${map.id}`);
              console.log(navigate(`${map.id}`));
            }}
          />
        ))}
        <li>{test}</li>
      </ul>
    </div>
  );
}

export default MainCategoryList;
