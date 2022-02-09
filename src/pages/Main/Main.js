import React, { useEffect, useState } from 'react';
import Home from './Home/Home';
import Carousel from '../../components/Carousel/Carousel';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import Quote from './Quote/Quote';
import { PROMOTIONS, STORE_LOCATOR } from './mainData';
import { BASE_URL } from '../../config';
import './Main.scss';

const Main = () => {
  const [carouselData, setCarouselData] = useState(null);

  useEffect(() => {
    const categoryNum = [3, 6, 7];

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
          dataList={[...carouselData[1], ...carouselData[2]]}
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
