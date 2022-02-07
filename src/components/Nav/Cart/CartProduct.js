import React, { useState } from 'react';
import Option from './Option';

function CartProduct({ key, productName, size, option, onDelete, price }) {
  const [selected, setSelected] = useState(1);
  const handleValue = e => {
    setSelected(e.target.value);
  };
  return (
    <li className="CartProduct" key={key}>
      <div>{productName}</div>
      <div>{size}</div>
      <Option option={option} onChange={handleValue} />
      <button onClick={onDelete}> 삭제 </button>
      <div> ₩{price * selected} </div>
    </li>
  );
}

export default CartProduct;
