import React from 'react';
import './CategoryModal.scss';
import CategoryModalLayout from './CategoryModalLayout';
import CategoryLists from './CategoryLists';

function CategoryModal({ closeModal, categoryImg, categoryModalClassName }) {
  return (
    <CategoryModalLayout
      categoryModalClassNames={categoryModalClassName}
      categoryImg={categoryImg}
    >
      <CategoryLists closeModal={closeModal} />
    </CategoryModalLayout>
  );
}

export default CategoryModal;
