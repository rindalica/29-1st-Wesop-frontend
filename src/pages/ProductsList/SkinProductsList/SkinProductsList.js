import React from 'react';
import SkinProductsListRow from '../SkinProductsListRow/SkinProductsListRow';
import './SkinProductsList.scss';

function SkinProductsList({ productsList }) {
  return (
    <div className="skinProductsList">
      {productsList &&
        productsList.map(skinProductsList => {
          return (
            <SkinProductsListRow
              key={skinProductsList.sub_category_id}
              id={skinProductsList.sub_category_id}
              name={skinProductsList.sub_category_name}
              description={skinProductsList.sub_category_description}
              productsList={skinProductsList.products}
            />
          );
        })}
    </div>
  );
}

export default SkinProductsList;
