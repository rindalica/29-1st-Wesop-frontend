import React from 'react';
import './ProductsMain.scss';

function ProductsMain({ product }) {
  return (
    <div className="productMain">
      <section>
        <div className="mainPicture">
          <img
            alt="detail"
            className="explainImg"
            src="https://picsum.photos/370"
          />
        </div>
      </section>
      <section className="list">
        <ul className="explainList">
          <li className="howToUse">
            <span>사용법</span>
            <h2>{product[0] && product[0].product_usage[0].description}</h2>
          </li>
          <li className="useAmountBox">
            <div className="useAmount">사용량</div>
            <div className="description">
              {product[0] && product[0].product_usage[0].dosage}
            </div>
          </li>
          <li className="textureBox">
            <div className="texture">텍스쳐</div>
            <div className="description">
              {product[0] && product[0].product_usage[0].texture}
            </div>
          </li>
          <li className="scentBox">
            <div className="scent">향</div>
            <div className="description">
              {product[0] && product[0].product_usage[0].aroma}
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default ProductsMain;
