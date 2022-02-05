import React from 'react';

function SubcatProduct({ name, detail, skinType, keyIngredient }) {
  return (
    <div className="productContainer">
      <img
        className="subcatProductImage"
        src="/images/products/product3.png"
        alt={name}
      />
      <div className="subcatProductsDetailList">
        <div className="productsDetail">
          <p className="productsName">{name}</p>
          <div className="productsDetailDescription">
            <span className="size">{detail[0].size}</span>
            <span> / </span>
            <span className="price">
              <span> ₩ </span>
              {detail[0].price}
            </span>
          </div>
        </div>

        <div class="SubcatProductsDetails">
          <ul class="SubcatProductsDetailsList">
            <li class="SubcatProductsDetailsListItem">
              <div class="SubcatProductsDetailsTitle">피부 타입</div>
              <div class="SubcatProductsDetailsContent">{skinType}</div>
            </li>
            <li class="SubcatProductsDetailDetailslistItem">
              <div class="SubcatProductsDetailDetailsTitle">주요 성분</div>
              <div class="SubcatProductsDetailDetailsContent">
                {keyIngredient}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubcatProduct;
