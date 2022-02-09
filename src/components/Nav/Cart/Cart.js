import React, { useState } from 'react';
import CartModal from './CartModal';

function Cart() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className="Cart">
      <button onClick={openModal}>카트</button>
      <CartModal cartModal={modal ? 'cartModal' : 'hidden'} />
    </div>
  );
}

export default Cart;
