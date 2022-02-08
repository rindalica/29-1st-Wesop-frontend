import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';
function CartProductsList() {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);

  console.log(cartData);

  const [selected, setSelected] = useState({ value: 1 });
  const handleValue = (e) => {
    setSelected(prev => ...Prev, value : e.target.value)
    });
  };
  return (
    <ul className="CartProductsList">
      {cartData.map(product => {
        function onDelete() {
          setCartData(
            cartData.filter(it => {
              if (it.id !== product.id) {
                return product.id;
              }
            })
          );
        }

        return (
          <CartProduct
            key={product.id}
            productName={product.productName}
            size={product.size}
            onDelete={onDelete}
            option={product.option}
            price={product.price}
          />
        );
      })}
    </ul>
  );
}

export default CartProductsList;
