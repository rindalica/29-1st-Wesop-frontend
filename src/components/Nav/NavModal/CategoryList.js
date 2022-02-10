import React from 'react';

function CategoryList({ className, categoryName, contentsList }) {
  return (
    <ul className={className}>
      <h2 className="categoryListTitle">{categoryName}</h2>

      {contentsList.map(content => {
        return (
          <li key={content.contentId} className="listContents">
            {content.content}
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
