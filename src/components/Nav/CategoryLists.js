import React from 'react';
// import CategoryImg from './CategoryImg';
import CategoryList from './CategoryList';

function CategoryLists({ Lists, categoryImg }) {
  return (
    <div className="categoryLists">
      {Lists.map(x => (
        <div key={x.id} key={x.id} className="lists">
          <CategoryList title={x.title} lists={x.list} />
        </div>
      ))}
      {categoryImg.map(y => {
        return (
          <img
            className="categoryImg"
            key={y.id}
            alt={y.imgAlt}
            src={y.imgSrc}
          />
        );
      })}
    </div>
  );
}

export default CategoryLists;
