import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';

function CategoryLists({ categoryLists }) {
  return (
    <div className="lists">
      {categoryLists.map(x => (
        <CategoryList key={x.id} title={x.title} lists={x.list} />
      ))}
    </div>
  );
}

export default CategoryLists;
