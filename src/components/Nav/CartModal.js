import React, { useState, useEffect } from 'react';
import './CartModal.scss';

function CartModal({ cartModal }) {
  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);
  const [cartData, setCartData] = useState([]);
  const total = cartData
    .map(item => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

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
          {cartData.map(({ id, productName, size, price, quantity }) => {
            const productResult = (a, b) => {
              return a * b;
            };
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

            return (
              <li className="CartProduct" key={id}>
                <div>{productName}</div>
                <div>{size}</div>
                <div>{quantity}</div>
                <button onClick={onDelete}> 삭제 </button>
                <div>₩ {productResult(price, quantity)}</div>
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
