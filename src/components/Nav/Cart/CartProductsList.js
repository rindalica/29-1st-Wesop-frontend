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
  return (
    <ul className="CartProductsList">
      {cartData.map(({ id, productName, size, price, option }) => {
        function onDelete() {
          setCartData(
            cartData.filter(it => {
              if (it.id !== id) {
                return id;
              }
            })
          );
        }
        return (
          <CartProduct
            key={id}
            productName={productName}
            size={size}
            option={option}
            price={price * selected}
            onDelete={onDelete}
            onChange={function selectHandle(e) {
              setSelected(e.target.value);
            }}
          />
        );
      })}
    </ul>
  );
}

export default CartProductsList;
