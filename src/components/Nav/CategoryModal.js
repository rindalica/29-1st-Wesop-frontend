import React from 'react';
import './CategoryModal.scss';
import CategoryModalLayout from './CategoryModalLayout';
import CategoryLists from './CategoryLists';

function CategoryModal({ Lists, categoryImg, categoryModalClassName }) {
  return (
    <CategoryModalLayout categoryModalClassNames={categoryModalClassName}>
      <CategoryLists Lists={Lists} categoryImg={categoryImg} />
    </CategoryModalLayout>
  );
}

export default CategoryModal;
