import React from 'react';
import './CategoryModal.scss';
import CategoryModalLayout from './CategoryModalLayout';
import CategoryLists from './CategoryLists';

function CategoryModal({ Lists, imgSrc, categoryModalClassName }) {
  return (
    <CategoryModalLayout categoryModalClassNames={categoryModalClassName}>
      <CategoryLists Lists={Lists} />
      <div className="categoryMainImg">
        <img className="categorySkinImg" src={imgSrc} alt="categorySkinImg" />
      </div>
    </CategoryModalLayout>
  );
}

export default CategoryModal;
