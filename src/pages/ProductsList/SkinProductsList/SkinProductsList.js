import React from 'react';
import SkinProductsListRow from '../SkinProductsListRow/SkinProductsListRow';
import './SkinProductsList.scss';

function SkinProductsList({ skinProducts }) {
  return (
    <div className="skinProductsList">
      {skinProducts &&
        skinProducts.map(subcat => {
          return (
            <SkinProductsListRow
              key={subcat.sub_category_id}
              id={subcat.sub_category_id}
              name={subcat.sub_category_name}
              description={subcat.sub_category_description}
              productsList={subcat.products}
            />
          );
        })}
    </div>
  );
}

export default SkinProductsList;
