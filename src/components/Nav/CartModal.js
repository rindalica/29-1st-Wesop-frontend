import React, { useState, useEffect } from 'react';
import './CartModal.scss';
const cartData = [
  {
    id: '0',
    productName: '리무브',
    size: '60ml',
    price: 30000,
  },
  {
    id: '1',
    productName: '컨트롤',
    size: '9ml',
    price: 27000,
  },
  {
    id: '2',
    productName: '마스크',
    size: '90ml',
    price: 65000,
  },
];
function CartModal() {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = e => {
    setQuantity(e.target.value);
  };
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
          {cartData.map(({ id, productName, size, price }) => {
            return (
              <li className="CartProduct" key={id}>
                <div>{productName}</div>
                <div>{size}</div>
                <input
                  type="number"
                  placeholder="Quantity"
                  onChange={handleQuantity}
                />
                <div>
                  {price} * {quantity}
                </div>
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
