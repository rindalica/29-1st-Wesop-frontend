import React from 'react';
import Home from './Home/Home';
import Carousel from './Carousel/Carousel';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Home />
      <Carousel />
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
      <Carousel />
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

const PROMOTIONS = [
  {
    idx: 0,
    isTextOnLeft: true,
    isContentImg: true,
    subTitle: '실험실에서 배운 교훈',
    heading: '스킨 케어 루틴을 관리하는 방법',
    paragraph:
      "세심하고 사려 깊은 스킨 케어 루틴에는 우리 피부만큼이나 소중한 '시간'이 필요하며 스스로를 보살피는데 사용하는 시간은 언제나 유익합니다.",
    btnText: '가이드 읽기',
    btnLink: '/',
    alt: 'skincare',
    src: '/images/main/main-2.jpg',
  },
  {
    idx: 1,
    isTextOnLeft: false,
    isContentImg: true,
    heading: '놀라움과 즐거움을 전하는 기프트',
    paragraph:
      '관대함을 표현하고 싶거나 축하할 일이 생겼을 때, 영감이 충만할 때, 위솝의 기프트 가이드는 받으시는 모든 분들에게 적합한 다양한 제품을 소개해 드립니다.',
    btnText: '모든 기프트 보기',
    btnLink: '/',
    alt: 'gifts',
    src: '/images/main/main-3.jpg',
  },
];

export default Main;
