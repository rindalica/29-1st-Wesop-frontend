import React from 'react';
import Home from './Home/Home';
import Carousel from './Carousel/Carousel';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import { PROMOTIONS, FACIAL_PRODUCTS, BODY_PRODUCTS } from './mainData';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Home />
      <Carousel dataList={FACIAL_PRODUCTS} />
      {PROMOTIONS.map(promotion => (
        <TwoColumnsPromotion
          key={promotion.idx}
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
      <Carousel dataList={BODY_PRODUCTS} />
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
