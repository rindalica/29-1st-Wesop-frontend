import React from 'react';
import './SkinProduct.scss';

//캐러셀
function SkinProduct({ name, detail }) {
  return (
    <div className="product">
      <img
        className="productImage"
        src="/images/products/product.webp"
        alt={name}
      />
      {/* 추후 product 데이터에 img src 추가되면 그 때 다시 작업해주는 걸로 */}
      <div className="subcatProductsDetailList">
        <div className="productsDetail">
          <p className="productsName">{name}</p>
          <div className="productsDetailDescription">
            <span className="size">{detail[0].size}</span>
            <span>ml /</span>
            <span className="price">
              <span> ₩ </span>
              {detail[0].price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinProduct;
