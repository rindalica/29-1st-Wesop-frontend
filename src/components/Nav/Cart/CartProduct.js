import React, { useState, useEffect } from 'react';
import Option from './Option';

function CartProduct({
  key,
  productName,
  size,
  option,
  onClick,
  price,
  sumPrice,
}) {
  // const [selected, setSelected] = useState(1);
  // const handleValue = e => {
  //   setSelected(prev => id: e.target.value);
  //TODO
  //여기에 fetch 함수 put 사용...
  //url 끝에 해당 id
  // ..data, defaults : e.target.value
  // .then 제대로 데이터 보내지면 거기서 setSelected(e.target.value)
  // const [selected, setSelected] = useState({
  //   [cartData[1].id]: cartData[1].defaults,
  // });
  // const handleValue = e => {
  //   setSelected(prev => {
  //     return { ...prev, [product.id]: e.target.value };
  //   });
  // };
  const [selected, setSelected] = useState(1);
  const handleValue = e => {
    setSelected(e.target.value);
    // fetch('/data/CartData.json/1', {
    //   method: 'post',
    //   body: JSON.stringify({
    //     name: 'qu',
    //     batch: 1,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     setSelected(e.target.value);
    //   });
  };

  return (
    <li className="CartProduct" key={key}>
      <div>{productName}</div>
      <div>{size}</div>
      <div>{selected}</div>
      <Option option={option} onChange={handleValue} />
      <button onClick={onClick}> 삭제 </button>
      <div> ₩ {price * selected}</div>
    </li>
  );
}

export default CartProduct;
