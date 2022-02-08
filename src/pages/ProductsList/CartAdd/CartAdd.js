import React, { useState } from 'react';

function CartAdd(props) {
  const [disappear, setDisappear] = useState(false); //

  const cartAdd = event => {
    setDisappear(!disappear);

    // fetch('https://172.30.1.11:8000/users/cart', {
    //   method: 'post',
    //   Headers: {
    //  "HOST": "https://www.apple.com/kr"
    //  "Authroization": "kldiduajsadm@9df0asmzm" (유저가 본인임을    증명할 수 있는 인증/인가 토큰)
    // }
    // Body: {
    //     product: {
    //         "product_Id": event.target.value
    //         "name": ???
    //         "color": ????
    //         "price": ?????
    //         "quantity": ??????
    //     }
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.success) {
    //       alert('저장 완료');
    //     }
    //   });
    // --------------------------------------백엔드 혜린님이 만들어 놓은 것
    //     1. 회원이 상품을 장바구니(cart)에 추가하는 경우
    // 요청시
    // {
    //     "url"         : "[여기에 client에서 요청한(fork한) URL 주소를 적는다]" ,
    //     "message"     :
    //     {
    //         token       : "[로그인 성공시 받았던 token 입력하기, 문자열로 전달]",
    //         id          : [여기에 회원 아이디 전달, int로 전달 할 것],
    //         product_id  : [여기에 상품 아이디 전달, int로 전달 할 것],
    //     }
    // }
  };

  return (
    <div
      className={`cartAdd ${disappear ? 'disappear' : 'appear'}`} //
      onMouseEnter={() => {
        setDisappear(false);
      }} //마우스가 div 영역에 들어가면 hide의 값이 false로 바뀌고 hide의 값이 false로 바뀌면 버튼이 열린다.
      onMouseLeave={() => {
        setDisappear(true); //마우스가 div 영역에 들어가면 hide의 값이 true로 바뀌고 hide의 값이 true로 바뀌면 버튼이 사라진다.
      }}
    >
      <button
        className={`button ${disappear ? 'Disappear' : 'Appear'}`}
        onClick={cartAdd}
        value={props[0].product_id}
      >
        <span>카트에 추가 </span>
        <span>{(+props[0].price).toLocaleString}</span>
      </button>
    </div>
  );
}

export default CartAdd;
