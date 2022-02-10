import React from 'react';
import INFO_DATA from '../INFO_DATA';
import './ProductsMain.scss';

function ProductsMain({ product }) {
  const usage = product.product_usage;

  // description: usage[0].dosage,
  // description: usage[0].texture,
  // description: usage[0].aroma,

  const a = usage && usage[0].aroma;
  const b = usage && usage[0].dosage;
  const c = usage && usage[0].texture;
  INFO_DATA[0].name = a;
  INFO_DATA[1].name = b;
  INFO_DATA[2].name = c;
  const NEWINFO_DATA = [...INFO_DATA];

  return (
    <div className="ProductsMain">
      <section>
        <div className="mainPicture">
          <img
            alt="detail"
            className="explainImg"
            src={usage && usage[0].image_url}
          />
        </div>
      </section>
      <section className="list">
        <ul className="explainList">
          <li className="howToUse">
            <span>사용법</span>
            <h2>{usage && usage[0].description}</h2>
          </li>

          {usage &&
            NEWINFO_DATA.map(ele => (
              <li className="useAmountBox" key={ele.id}>
                <div className="useAmount">{ele.title}</div>
                <div className="description">{ele.name}</div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
export default ProductsMain;
