import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubcatNavList.scss';

function SubcatNavList(props) {
  const navigate = useNavigate();
  const goToCatagory = () => {
    navigate(`/skin/category/${props.id}`);
  };

  return (
    <li className="SubnavLi" onClick={goToCatagory}>
      <button type="button" className="SubnavSelected">
        <span className="SubnavInnerText">{props.name}</span>
      </button>
    </li>
  );
}

export default SubcatNavList;
