import React, { useState, useEffect } from 'react';
import './CartModal.scss';
import CartProduct from './CartProduct';
function CartModal({ cartModal }) {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('/data/CartData.json')
      .then(res => res.json())
      .then(res => setCartData(res));
  }, []);
  const [totalPrice, setTotalPrice] = useState(0);
  // const total = cartData
  //   .map(item => item.price * item.selected)
  //   .reduce((prev, curr) => prev + curr, 0);
  const sumPrice = () => {
    setTotalPrice(1);
  };
  console.log(cartData);
  return (
    <div className={cartModal}>
      <div className="CartProducts">
        <div className="CartProductsHeader">
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button>X</button>
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
        {/* <CartProductsList sumPrice={sumPrice} /> */}
      </div>
      <div className="CartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="CartSummaryMoney">
          <h5> 소계 (세금 포함)</h5>
          <span> ₩ {totalPrice} </span>
        </div>
        <button>결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
