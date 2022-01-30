import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';

function CategoryLists({ Lists }) {
  return (
    <div className="lists">
      {Lists.map(x => (
        <CategoryList key={x.menu} title={x.title} lists={x.list} />
      ))}
    </div>
  );
}

export default CategoryLists;
