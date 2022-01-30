import React, { useState, useEffect } from 'react';

function CategoryList({ title, lists }) {
  return (
    <div className="categoryList">
      <div className="categoryDetail">
        <h2 className="categoryDetailTitle">{title}</h2>
        <ul className="categoryDetailList">
          {lists.map(({ id, name }) => (
            <li key={id} className="listContents">
              <a href="/">
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
