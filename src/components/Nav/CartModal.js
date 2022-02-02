import React, { useState, useEffect } from 'react';
import './CartModal.scss';
import Option from './Option';

function CartModal({ cartModal }) {
  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);
  const [cartData, setCartData] = useState([]);

  const total = cartData
    .map(item => item.price * item.selected)
    .reduce((prev, curr) => prev + curr, 0);
  const [selected, setSelected] = useState(1);
  return (
    <div className={cartModal}>
      <div className="CartProducts">
        <div className="CartProductsHeader">
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button>X</button>
        </div>
        <ul className="CartProductsList">
          {cartData.map(({ id, productName, size, price, option, value }) => {
            function onDelete() {
              setCartData(
                cartData.filter(it => {
                  // eslint-disable-next-line no-unused-expressions
                  if (it.id !== id) {
                    return id;
                  }
                })
              );
            }

            const productResult = (a, b) => {
              return a * b;
            };
            // console.log(option);
            return (
              <li className="CartProduct" key={id}>
                <div>{productName}</div>
                <div>{size}</div>
                <Option
                  option={option}
                  onChange={function selectHandle(e) {
                    const news = option.filter(o => {
                      if (e.target.value == o.value) {
                        return o.value;
                      }
                    });
                    setSelected(news[0].value);
                  }}
                />
                <button onClick={onDelete}> 삭제 </button>
                <div>₩ {productResult(price, selected)}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="CartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="CartSummaryMoney">
          <h5> 소계 (세금 포함)</h5>
          <span> ₩ {total}</span>
        </div>
        <button>결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
