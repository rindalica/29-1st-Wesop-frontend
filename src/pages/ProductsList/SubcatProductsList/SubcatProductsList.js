import React from 'react';
import SubcatProductsIntro from '../SubcatProductsIntro/SubcatProductsIntro';
import SubcatProduct from '../SubcatProduct/SubcatProduct';
import './SubcatProductsList.scss';

function SubcatProductsList({ subcategoryProductsList }) {
  return (
    <div className="subcatProductsListMain">
      <div className="productContainer">
        {subcategoryProductsList[0] && (
          <SubcatProductsIntro
            category={subcategoryProductsList[0].sub_category_name}
            description={subcategoryProductsList[0].sub_category_description}
          />
        )}
      </div>

      {subcategoryProductsList &&
        subcategoryProductsList.map(product => {
          return (
            <SubcatProduct
              key={product.name}
              name={product.name}
              detail={product.product_detail}
              skinType={product.skin_type}
              keyIngredient={product.key_ingredient}
            />
          );
        })}
    </div>
  );
}

export default SubcatProductsList;
