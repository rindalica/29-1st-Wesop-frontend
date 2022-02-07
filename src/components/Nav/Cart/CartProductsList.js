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
      {cartData.map((product, idx) => {
        function onDelete() {
          setCartData(
            cartData.filter(it => {
              if (it.id !== product.id) {
                return product.id;
              }
            })
          );
        }
        const handleValue = e => {
          setSelected(e.target.value);
        };
        return (
          <CartProduct
            key={product.id}
            productName={product.productName}
            size={product.size}
            option={product.option}
            price={product.price * selected}
            value={selected}
            onDelete={onDelete}
            onChange={handleValue}
          />
        );
      })}
    </ul>
  );
}

export default CartProductsList;
