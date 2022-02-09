import React from 'react';
import './CartAdd.scss';

function CartAdd({ detail }) {
  // const cartAdd = event => {
  // fetch('https://172.30.1.11:8000/users/cart', {
  //   method: 'post',
  //   Headers: {
  //  "HOST": "https://www.apple.com/kr"
  //  "Authroization": "kldiduajsadm@9df0asmzm" (유저가 본인임을    증명할 수 있는 인증/인가 토큰)
  // }
  // Body:
  // {
  //     "url"         : "[여기에 client에서 요청한(fork한) URL 주소를 적는다]" ,
  //     "message"     :
  //     {
  //         token       : "[로그인 성공시 받았던 token 입력하기, 문자열로 전달]",
  //         id          : [여기에 회원 아이디 전달, int로 전달 할 것],
  //         product_id  : [여기에 상품 아이디 전달, int로 전달 할 것],
  //     }
  // }
  // })
  //   .then(res => res.json())
  //   .then(res => {
  //     if (res.success) {
  //       alert('카트에 추가되었습니다');
  //     }
  //   });

  return (
    <div className="cartAdd">
      <button
        className="cartAddBtn"
        // onClick={cartAdd}
        value={detail[0].product_option_id}
      >
        <span>카트에 추가 + </span>
        <span>{(+detail[0].price).toLocaleString}</span>
      </button>
    </div>
  );
}

export default CartAdd;
