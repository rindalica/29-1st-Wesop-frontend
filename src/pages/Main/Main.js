import React, { useEffect, useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';
import Home from './Home/Home';
import Carousel from '../../components/Carousel/Carousel';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import Quote from './Quote/Quote';
import { PROMOTIONS, STORE_LOCATOR } from './mainData';
import { BASE_URL } from '../../config';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
const Main = () => {
  // FIXME: Nav와 합치면서 로그인 버튼은 삭제할 예정
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  useEffect(() => {
    document.body.className = isLoginOpen ? 'noScroll' : '';
  }, [isLoginOpen]);

  const [carouselData, setCarouselData] = useState(null);

  useEffect(() => {
    const categoryNum = [1, 3];

    Promise.all(
      categoryNum.map(num =>
        fetch(`${BASE_URL}/skin/products?categoryId=${num}`)
      )
    )
      .then(res => Promise.all(res.map(res => res.json())))
      .then(json => {
        setCarouselData(
          json.map(data => data.message.map(data => data.products))
        );
      });
  }, []);

  return (
    <>
      <button type="button" onClick={openLogin}>
        로그인
      </button>
      <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <Home />
      {carouselData && (
        <Carousel
          className="carouselFirst"
          dataList={carouselData[0].slice(1, 6)}
        />
      )}
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
      {carouselData && (
        <Carousel
          className="carouselSecond"
          dataList={carouselData[1].slice(0, 6)}
        />
      )}
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
        <Carousel
          className="storeLocator"
          dataList={STORE_LOCATOR}
          showingItemCount={1}
          isLoop={true}
        />
      </TwoColumnsPromotion>
      <Quote />
    </>
  );
};

export default Main;
