import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubcatNavList.scss';

function SubcatNavList({ id, name, setCategoryId }) {
  const navigate = useNavigate();
  const goToCatagory = () => {
    const queryString = `?categoryId=${id}`;
    navigate(queryString);
    setCategoryId(queryString);
    window.location.reload();
  };

  return (
    <li className="SubnavLi" onClick={goToCatagory}>
      <button type="button" className="SubnavSelected">
        <span className="SubnavInnerText">{name}</span>
      </button>
    </li>
  );
}

export default SubcatNavList;
