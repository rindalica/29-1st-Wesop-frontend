import React, { useState, useEffect } from 'react';

function CategoryList({ title, lists }) {
  return (
    <div className="mainList">
      <div className="categoryDetail">
        <h2 className="categoryDetailTitle">{title}</h2>
        <ul className="categoryDetailList">
          {lists.map(listdata => (
            // eslint-disable-next-line react/jsx-key
            <li className="ListContents">
              <a href="/">
                <span>{listdata.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
