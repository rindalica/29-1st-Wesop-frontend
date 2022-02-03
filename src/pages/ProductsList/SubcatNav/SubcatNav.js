import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubcatNavList from '../SubcatNavList/SubcatNavList';
import './SubcatNav.scss';

function SubcatNav({ skinProducts }) {
  const navigate = useNavigate();
  const goToAll = () => {
    navigate('/products-list');
  };

  return (
    <div className="Subnav">
      <ul className="SubnavUl">
        <li className="SubnavLi" onClick={goToAll}>
          모든 스킨
        </li>
        {skinProducts.map(skin => {
          return (
            <SubcatNavList
              key={skin.sub_category_id}
              name={skin.sub_category_name}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default SubcatNav;
