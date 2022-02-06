import React from 'react';
import './ProductsMain.scss';

function ProductsMain() {
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
            <h2>{}</h2>
          </li>
          <li className="useAmountBox">
            <div className="useAmount">사용량</div>
            <div className="description">{}</div>
          </li>
          <li className="textureBox">
            <div className="texture">텍스쳐</div>
            <div className="description">{}</div>
          </li>
          <li className="scentBox">
            <div className="scent">향</div>
            <div className="description">{}</div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default ProductsMain;
