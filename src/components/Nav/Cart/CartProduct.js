import React, { useState } from 'react';
import Option from './Option';

function CartProduct({ key, productName, size, option, onClick, price }) {
  const [selected, setSelected] = useState(1);
  const handleValue = e => {
    setSelected(e.target.value);
  };
  //TODO
  // fetch('/data/CartData.json/1', {
  //   method: 'post',
  //   body: JSON.stringify({
  //     name: 'qu',
  //     Quantity: { selected },
  //   }),
  // })
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res);
  //   });

  return (
    <li className="cartProduct" key={key}>
      <div>{productName}</div>
      <div>{size}</div>
      <Option option={option} onChange={handleValue} onClick={onClick} />
      <div> ₩ {price * selected}</div>
    </li>
  );
}

export default CartProduct;
