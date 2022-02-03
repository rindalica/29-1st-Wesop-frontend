import React from 'react';
import SkinProduct from '../SkinProduct/SkinProduct';
import './SkinProductsListRow.scss';

function SkinProductsList({ name, description, productsList }) {
  return (
    <div className="skinProductsList">
      <div className="skinSubcatIntro">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      {productsList &&
        productsList.map(product => {
          return (
            <SkinProduct
              key={product.product_name}
              name={product.product_name}
              detail={product.product_detail}
            />
          );
        })}
    </div>
  );
}

export default SkinProductsList;
