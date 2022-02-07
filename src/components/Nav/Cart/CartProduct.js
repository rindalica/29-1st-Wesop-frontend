import React from 'react';
import Option from './Option';

function CartProduct({
  key,
  productName,
  size,
  option,
  onDelete,
  onChange,
  price,
}) {
  return (
    <li className="CartProduct" key={key}>
      <div>{productName}</div>
      <div>{size}</div>
      <Option option={option} onChange={onChange} />
      <button onClick={onDelete}> 삭제 </button>
      <div>₩{price} </div>
    </li>
  );
}

export default CartProduct;
