import React, { useState, useEffect } from 'react';
import './CartModal.scss';
import CartProductsList from './CartProductsList';
function CartModal({ cartModal }) {
  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);
  const [cartData, setCartData] = useState([]);

  // const total = cartData
  //   .map(item => item.price * item.selected)
  //   .reduce((prev, curr) => prev + curr, 0);

  return (
    <div className={cartModal}>
      <div className="CartProducts">
        <div className="CartProductsHeader">
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button>X</button>
        </div>
        <CartProductsList />
      </div>
      <div className="CartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="CartSummaryMoney">
          <h5> 소계 (세금 포함)</h5>
          <span> ₩ </span>
        </div>
        <button>결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
