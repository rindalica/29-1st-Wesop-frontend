import React, { useState } from 'react';
import './CartAdd.scss';
import { BASE_URL } from '../../../config';

function CartAdd({ detail }) {
  const [option, setOption] = useState([]);

  const cartAdd = e => {
    // setOption(value);
    fetch(`${BASE_URL}carts/add`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.WgDrUj6df_iJkOoZ5e_j9x9p-GPwuPq41HTQQ_jlNX8',
      },
      body: JSON.stringify({
        item_id: option,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('상품이 장바구니에 담겼습니다.');
        } else if (result.message === 'SUCCESS_UPDATE') {
          alert('이미 장바구니에 담겨 있습니다.');
        }
        console.log('결과: ', result);
      });
  };

  return (
    <div id="cartAdd">
      <button
        className="cartAddBtn"
        onClick={cartAdd}
        value={detail[0].product_option_id}
      >
        <span>카트에 추가 + </span>
        <span>{(+detail[0].price).toLocaleString}</span>
      </button>
    </div>
  );
}

export default CartAdd;
