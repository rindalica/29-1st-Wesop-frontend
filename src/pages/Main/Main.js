import React from 'react';
import Login from '../../components/Login/Login';
import Home from './Home/Home';
import Carousel from './Carousel/Carousel';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import { PROMOTIONS, FACIAL_PRODUCTS, BODY_PRODUCTS } from './mainData';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Login
        mainTitle="안녕하세요."
        subTitle="로그인 및 회원가입을 위한 이메일 주소를 입력 부탁드립니다."
        btnText="계속"
      />
      <Login
        mainTitle="이솝에 오신 것을 환영합니다."
        subTitle="회원가입을 위해 아래의 세부 정보를 작성해주세요."
        btnText="등록"
      >
        <input type="password" placeholder="패스워드" />
        <input type="password" placeholder="패스워드 확인" />
        <input type="text" placeholder="성" />
        <input type="text" placeholder="이름" />
        <input type="checkbox" />
      </Login>
      <Home />
      <Carousel className="facial" dataList={FACIAL_PRODUCTS} />
      {PROMOTIONS.map(promotion => (
        <TwoColumnsPromotion
          key={promotion.id}
          isTextOnLeft={promotion.isTextOnLeft}
          isContentImg={promotion.isContentImg}
          subTitle={promotion.subTitle}
          heading={promotion.heading}
          paragraph={promotion.paragraph}
          btnText={promotion.btnText}
          btnLink={promotion.btnLink}
          alt={promotion.alt}
          src={promotion.src}
        />
      ))}
      <Carousel className="body" dataList={BODY_PRODUCTS} />
      <TwoColumnsPromotion
        isTextOnLeft={true}
        isContentImg={false}
        heading="스토어 로케이터"
        paragraph="매장에서는 위솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다."
        btnText="가까운 스토어 찾기"
        btnLink="/"
        alt="stores"
        src="/images/main/main-3.jpg"
      >
        <div>stores carousel</div>
      </TwoColumnsPromotion>
    </>
  );
};

export default Main;
