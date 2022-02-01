import React, { useState, useEffect } from 'react';
import CartModal from './CartModal';

function Cart() {
  const [isCartModal, setIsCartModal] = useState(false);
  const handleModal = () => {
    isCartModal ? setIsCartModal('hidden') : setIsCartModal('cartModal');
  };
  return (
    <div className="cart">
      <button onClick={handleModal}>카트</button>
      <CartModal cartModal={isCartModal} />
    </div>
  );
}

export default Cart;
