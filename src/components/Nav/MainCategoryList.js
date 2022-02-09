import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainCategoryList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://10.58.4.177:8000/categories')
      .then(res => res.json())
      .then(data => {
        setList(data.sub_categories);
      });
  }, []);
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
          <li key={map.main_category_id} className="MainCategoryListContents">
            <button
              onClick={function clickSubCategory() {
                navigate(`/skin/products/?categoryId=${map.sub_category_id}`);
              }}
            >
              {map.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainCategoryList;
