import React, { useState, useEffect } from 'react';
import './CartModal.scss';
const cartData = [
  {
    id: '0',
    productName: '리무브',
    quantity: 1,
    size: '60ml',
    price: 30000,
  },
  {
    id: '1',
    productName: '컨트롤',
    quantity: 3,
    size: '9ml',
    price: 27000,
  },
  {
    id: '2',
    productName: '마스크',
    quantity: 2,
    size: '90ml',
    price: 65000,
  },
];
function CartModal() {
  // const [quantity, setQuantity] = useState(1);
  // const [price, setPrice] = useState(0);
  function productResult(a, b) {
    return a * b;
  }
  return (
    <div className="cartModal">
      <div className="CartProducts">
        <div className="CartProductsHeader">
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button>X</button>
        </div>
        <ul className="CartProductsList">
          {cartData.map(({ id, productName, size, price, quantity }) => {
            return (
              <li className="CartProduct" key={id}>
                <div>{productName}</div>
                <div>{size}</div>
                <div>
                  {quantity}
                  <button>삭제</button>
                </div>

                <div>{productResult(price, quantity)}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="CartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="CartSummaryMoney">
          <h5> 소계 (세금 포함)</h5>
          <span>₩ 55,000</span>
        </div>
        <button>결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
