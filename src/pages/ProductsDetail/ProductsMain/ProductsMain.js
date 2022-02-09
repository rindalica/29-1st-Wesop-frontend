import React from 'react';
import './ProductsMain.scss';

function ProductsMain({ product }) {
  const usage = product.product_usage;

  const INFO_DATA = usage && [
    {
      id: 1,
      title: '사용량',
      description: usage[0].dosage,
    },
    {
      id: 2,
      title: '텍스쳐',
      description: usage[0].texture,
    },
    {
      id: 3,
      title: '향',
      description: usage[0].aroma,
    },
  ];

  return (
    <div className="productMain">
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
            INFO_DATA.map(ele => (
              <li className="useAmountBox" key={ele.id}>
                <div className="useAmount">{ele.title}</div>
                <div className="description">{ele.description}</div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
export default ProductsMain;
