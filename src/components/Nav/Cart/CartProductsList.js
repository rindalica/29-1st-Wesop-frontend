import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';

function CartProductsList({ sumPrice }) {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);

  // eslint-disable-next-line no-unused-vars
  // console.log(selected);

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
        // setSelected(e.target.value);

        return (
          <>
            <div>{test}</div>
            <CartProduct
              key={product.id}
              productName={product.productName}
              size={product.size}
              onClick={onDelete}
              option={product.option}
              price={product.price}
            />
          </>
          // <li className="CartProduct" key={product.id}>
          //   <div>{product.productName}</div>
          //   <div>{product.size}</div>
          //   <div>{selected[cartData[1].id]}</div>
          //   <Option option={product.option} onChange={handleValue} />
          //   <button onClick={onDelete}> 삭제 </button>
          //   <div> ₩ </div>
          // </li>
        );
      })}
    </ul>
  );
}

export default CartProductsList;
