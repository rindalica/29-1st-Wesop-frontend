import React from 'react';
import SubcatProductsIntro from '../SubcatProductsIntro/SubcatProductsIntro';
import SubcatProduct from '../SubcatProduct/SubcatProduct';
import './SubcatProductsList.scss';

function SubcatProductsList({ productsList }) {
  return (
    <div className="subcatProductsListMain">
      <div className="productContainer">
        {productsList[0] && (
          <SubcatProductsIntro
            category={productsList[0].sub_category_name}
            description={productsList[0].sub_category_description}
          />
        )}
      </div>

      {productsList &&
        productsList.map(product => {
          return (
            <SubcatProduct
              key={product.products.product_id}
              name={product.products.product_name}
              detail={product.products.product_detail}
              skinType={product.products.skin_type}
              keyIngredient={product.products.key_ingredient}
              image={product.products.product_image_url}
            />
          );
        })}
    </div>
  );
}

export default SubcatProductsList;
