import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from '../../../config';

function MainCategoryList({ closeModal }) {
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
          <Link to="/Skin">
            <button
              onClick={function allSkinCare() {
                closeModal();
              }}
            >
              스킨 케어 모두 보기
            </button>
          </Link>
        </li>
        {list.map(mainCategory => (
          <li
            key={mainCategory.sub_category_id}
            className="MainCategoryListContents"
          >
            <button
              onClick={function clickSubCategory() {
                navigate(
                  `/skin/products/?categoryId=${mainCategory.sub_category_id}`
                );
                {
                  closeModal();
                }
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
