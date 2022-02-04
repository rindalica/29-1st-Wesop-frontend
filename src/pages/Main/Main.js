import React, { useEffect, useState } from 'react';
import Home from './Home/Home';
import Carousel from './Carousel/Carousel';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import Quote from './Quote/Quote';
import {
  PROMOTIONS,
  STORE_LOCATOR,
  FACIAL_PRODUCTS,
  BODY_PRODUCTS,
} from './mainData';
import './Main.scss';

const Main = () => {
  const [carouselData, setCarouselData] = useState(null);
  const categoryNum = [1, 3];

  // useEffect(() => {
  //   Promise.all(
  //     categoryNum.map(num =>
  //       fetch(`http://172.30.1.32:8000/skin/categories/${num}`)
  //     )
  //   )
  //     .then(res => Promise.all(res.map(res => res.json())))
  //     .then(json => {
  //       console.log(json);
  //       setCarouselData(json.map(data => data.message));
  //       console.log(carouselData);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log(carouselData);
  // }, [carouselData]);

  return (
    <>
      <Home />
      {/* {carouselData && (
        <Carousel
          className="carouselFirst"
          dataList={carouselData[0].slice(1, 6)}
          hasPagination={true}
        />
      )} */}
      <Carousel
        className="carouselFirst"
        dataList={FACIAL_PRODUCTS}
        hasPagination={true}
      />
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
      {/* {carouselData && (
        <Carousel
          className="carouselSecond"
          dataList={carouselData[1].slice(0, 6)}
          hasPagination={true}
        />
      )} */}
      <Carousel
        className="carouselSecond"
        dataList={BODY_PRODUCTS}
        hasPagination={true}
      />
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
          hasPagination={true}
          showingItemCount={1}
          isLoop={true}
        />
      </TwoColumnsPromotion>
      <Carousel
        className="carouselTest"
        dataList={FACIAL_PRODUCTS}
        hasPagination={true}
        hasIntroduction={true}
        introduction="함께 사용하기 좋은 제품"
      />
      <div className="productsListTest">
        <header>
          <h2>핸드</h2>
          <div>
            매일 우리에게 안락함을 선사하는 손은 보살핌을 받을 자격이
            충분합니다. 아로마 클렌저와 밤은 손에 수분과 영양을 공급하고
            부드럽게 가꿔줍니다.
          </div>
        </header>
        <Carousel
          className="carouselTest"
          dataList={BODY_PRODUCTS}
          hasPagination={false}
          showingItemCount={3.5}
        />
      </div>
      <Quote />
    </>
  );
};

export default Main;
