import React, { useState } from 'react';
import Option from './Option';

function CartProduct({ productName, size, option, onClick, price }) {
  const [selected, setSelected] = useState(1);

  const selectValue = e => {
    setSelected(e.target.value);
  };

  const productPrice = selected * price;

  return (
    <li className="CartProduct">
      <div>{productName}</div>
      <div>{size}</div>
      <Option option={option} onChange={selectValue} onClick={onClick} />
      <div> ₩ {(+productPrice).toLocaleString()} </div>
    </li>
  );
}

export default CartProduct;
