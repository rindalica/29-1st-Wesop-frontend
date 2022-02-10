import React, { useState } from 'react';
import CartModal from './CartModal';

function Cart() {
  const [cartModal, setCartModal] = useState(false);
  const openModal = () => {
    setCartModal(!cartModal);
  };

  return (
    <div className="Cart">
      <button onClick={openModal}>카트</button>
      <CartModal cartModal={cartModal ? 'cartModal' : 'hidden'} />
    </div>
  );
}

export default Cart;
