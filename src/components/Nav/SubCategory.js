import React from 'react';

function SubCategory({ key, name }) {
  const clickSubCategory = e => {
    console.log(e.target.value);
  };
  return (
    <li key={key} className="MainCategoryListContents">
      <button onClick={clickSubCategory} value={name} />
    </li>
  );
}

export default SubCategory;
