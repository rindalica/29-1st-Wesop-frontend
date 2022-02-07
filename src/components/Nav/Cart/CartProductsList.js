import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';
function CartProductsList() {
  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);
  const [cartData, setCartData] = useState([]);
  const [selected, setSelected] = useState(1);
  const [idxs, setIdxs] = useState();
  // const handleValue = e => {
  //   setSelected(e.target.value);
  // };
  return (
    <ul className="CartProductsList">
      {cartData.map((pro, idx) => {
        function onDelete() {
          setCartData(
            cartData.filter(it => {
              if (it.id !== pro.id) {
                return pro.id;
              }
            })
          );
        }

        return (
          <CartProduct
            key={pro.id}
            productName={pro.productName}
            size={pro.size}
            option={pro.option}
            price={pro.price * selected}
            value={selected}
            onDelete={onDelete}
            onChange={function handleValue(e) {
              setSelected(e.target.value);
            }}
          />
        );
      })}
    </ul>
  );
}

export default CartProductsList;
