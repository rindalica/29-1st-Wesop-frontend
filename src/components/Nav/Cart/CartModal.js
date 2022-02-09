import React, { useState, useEffect } from 'react';
import './CartModal.scss';
import CartProduct from './CartProduct';
function CartModal({ cartModal, closeBtn }) {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);
  //TODO
  // const [totalPrice, setTotalPrice] = useState(0);
  // const total = cartData
  //   .map(item => item.price * item.selected)
  //   .reduce((prev, curr) => prev + curr, 0);
  // const sumPrice = () => {
  //   setTotalPrice(1);
  // };

  return (
    <div className={cartModal}>
      <div className="cartProducts">
        <div className="cartProductsHeader">
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button className="closeModalBtn">X</button>
        </div>
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
              //               fetch(
              //               //TODO
              //               //path파라미터
              // , {method : "DELETE"}
              //               )
              //               .then(res => res.json())
              //               .then(res => console.log(res.result))
            }

            return (
              <CartProduct
                key={product.id}
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
          <span> ₩ </span>
        </div>
        <button>결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
