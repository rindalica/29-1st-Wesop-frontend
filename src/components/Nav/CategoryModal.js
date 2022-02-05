import React from 'react';
import './CategoryModal.scss';
import CategoryModalLayout from './CategoryModalLayout';
import CategoryLists from './CategoryLists';

function CategoryModal({ categoryImg, categoryModalClassName }) {
  return (
    <CategoryModalLayout
      categoryModalClassNames={categoryModalClassName}
      categoryImg={categoryImg}
    >
      <CategoryLists />
    </CategoryModalLayout>
  );
}

export default CategoryModal;
