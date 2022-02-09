import React from 'react';

function SubCategory({ id, name, onClick }) {
  return (
    <li className="MainCategoryListContents">
      <button key={id} onClick={onClick} value={name} />
    </li>
  );
}

export default SubCategory;
