import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubcatNav.scss';

function SubcatNav({ lists }) {
  // const [list, setLists] = useState([]);

  // useEffect(() => {
  //   fetch('/data/data.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setLists(data);
  //     });
  // }, []);
  const navigate = useNavigate();
  const goToCatagory = () => {
    navigate(`/products-list-subcategory/${lists.id}`); //undefined가 나오는 이유?
  };

  return (
    <div className="Subnav">
      <ul className="SubnavUl">
        {lists.map(category => {
          return (
            <li className="SubnavLi" key={category.id} onClick={goToCatagory}>
              <button type="button" className="SubnavSelected">
                <span className="SubnavInnerText">{category.categoryName}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubcatNav;
