import React, { useState, useEffect } from 'react';
import Option from './Option';

function CartProduct({ key, productName, size, option, onDelete, price }) {
  // const [selected, setSelected] = useState(1);
  // const handleValue = e => {
  //   setSelected(prev => id: e.target.value);
  //여기에 fetch 함수 put 사용...
  //url 끝에 해당 id
  // ..data, defaults : e.target.value
  // .then 제대로 데이터 보내지면 거기서 setSelected(e.target.value)

  const productTotal = price * selected;
  return (
    <li className="CartProduct" key={key}>
      <div>{productName}</div>
      <div>{size}</div>
      <Option option={option} onChange={handleValue} />
      <button onClick={onDelete}> 삭제 </button>
      <div> ₩ {productTotal} </div>
    </li>
  );
}

export default CartProduct;
