import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../config';

function MainCategoryList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
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
        {list.map(mainCategory => (
          <li
            key={mainCategory.main_category_id}
            className="MainCategoryListContents"
          >
            <button
              onClick={function clickSubCategory() {
                navigate(
                  `/skin/products/?categoryId=${mainCategory.sub_category_id}`
                );
              }}
            >
              {mainCategory.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainCategoryList;
