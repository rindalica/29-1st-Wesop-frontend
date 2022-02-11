import React, { useState, useEffect } from 'react';
import './CartModal.scss';
import CartProduct from './CartProduct';

function CartModal({ cartModal }) {
  const [cartData, setCartData] = useState([]);
  // const getCartList = () => {
  //   sessionStorage.setItem(
  //     'ACCESS_TOKEN',
  //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.WgDrUj6df_iJkOoZ5e_j9x9p-GPwuPq41HTQQ_jlNX8'
  //   );
  //   fetch('http://18.222.129.30:8000/carts', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: sessionStorage.getItem('ACCESS_TOKEN'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCartData(data.products);
  //       console.log(data.products);
  //     });
  // };
  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);
  return (
    <div className={cartModal}>
      <div className="cartProducts">
        <div className="cartProductsHeader">
          <div>
            <button>카트</button>
          </div>
          <div>사이즈</div>
          <div>수량</div>
          <button className="closeModalBtn">X</button>
        </div>
        <ul>
          {cartData.map(product => {
            function onDelete() {
              setCartData(
                cartData.filter(it => {
                  console.log(product.id);
                  if (it.id !== product.id) {
                    return product.id;
                  }
                })
              );
            }
            return (
              <CartProduct
                key={product.option_id}
                productName={product.productName}
                size={product.size}
                onClick={onDelete}
                option={product.option}
                price={product.price}
              />
            );
          })}
        </ul>
      </div>
      <div className="cartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="cartSummaryMoney">
          <h5> 소계 (세금 포함)</h5>
          <span> ₩ 0원</span>
        </div>
        <button className="payBtn">결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
