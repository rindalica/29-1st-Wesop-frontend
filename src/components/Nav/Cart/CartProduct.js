import React, { useState } from 'react';
import Option from './Option';

function CartProduct({ productName, size, option, onClick, price }) {
  const [selected, setSelected] = useState(1);
  const [total, setTotal] = useState(0);

  const selectValue = e => {
    setSelected(e.target.value);
  };
  // 상품별 수량에 따른 최종 가격
  const productPrice = selected * price;
  //
  const sumPrice = el => {
    setTotal(total => total + el);
  };
  // map 돌린 <option> 마다 이벤트...?
  const totalPrice = () => {
    sumPrice(selected);
  };

  return (
    <li className="CartProduct">
      <div>{productName}</div>
      <div>{size}</div>
      <Option option={option} onChange={selectValue} onClick={onClick} />
      <div> ₩ {productPrice}</div>
    </li>
  );
}

export default CartProduct;
