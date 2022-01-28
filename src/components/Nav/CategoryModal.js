import React from 'react';
import './CategoryModal.scss';
import CategoryModalLayout from './CategoryModalLayout';
import CategoryLists from './CategoryLists';

function CategoryModal({ Lists, categoryModalClassName }) {
  return (
    <CategoryModalLayout categoryModalClassNames={categoryModalClassName}>
      {Lists.map(lists => (
        <>
          <CategoryLists categoryLists={lists.lists} />
          <div className="categoryMainImg">
            <img
              className="categorySkinImg"
              src="https://images.pexels.com/photos/1619488/pexels-photo-1619488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="categorySkinImg"
            />
          </div>
        </>
      ))}
    </CategoryModalLayout>
  );
}

export default CategoryModal;
