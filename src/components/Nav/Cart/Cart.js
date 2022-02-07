import React, { useState, useEffect } from 'react';
import CartModal from './CartModal';

function Cart() {
  // const [isClick, setIsClick] = useState(false);
  const [modal, setModal] = useState('hidden');
  const handleModal = () => {
    setModal('cartModal');
  };
  return (
    <div className="cart">
      <button onClick={handleModal}>카트</button>
      <CartModal cartModal={modal} />
    </div>
  );
}

export default Cart;
