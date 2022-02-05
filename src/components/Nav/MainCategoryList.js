import React, { useState, useEffect } from 'react';

function MainCategoryList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('http://172.30.1.32:8000/categories')
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
        {list.map(({ main_category_id, name }) => (
          <li key={main_category_id} className="MainCategoryListContents">
            <a href="/">
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainCategoryList;
