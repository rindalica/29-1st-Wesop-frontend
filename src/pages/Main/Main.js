import React, { useEffect, useState } from 'react';
import Home from './Home/Home';
import Carousel from './Carousel/Carousel';
import TwoColumnsPromotion from '../../components/TwoColumnsPromotion/TwoColumnsPromotion';
import { PROMOTIONS, FACIAL_PRODUCTS, BODY_PRODUCTS } from './mainData';
import './Main.scss';

const Main = () => {
  const [carouselData, setCarouselData] = useState(null);
  const categoryNum = [1, 3];

  // const getPromotionData = async () => {
  //   const json = await (
  //     await fetch('http://172.30.1.32:8000/skin/categories/1')
  //   ).json();
  //   setCarouselData(json.message.slice(1, 6));
  // };

  // useEffect(() => {
  //   getPromotionData();
  // }, []);

  useEffect(() => {
    Promise.all(
      categoryNum.map(num =>
        fetch(`http://172.30.1.32:8000/skin/categories/${num}`)
      )
    )
      .then(res => Promise.all(res.map(res => res.json())))
      .then(json => {
        console.log(json);
        setCarouselData(json.map(data => data.message));
        console.log(carouselData);
      });
  }, []);

  useEffect(() => {
    console.log(carouselData);
  }, [carouselData]);

  return (
    <>
      <Home />
      {carouselData && (
        <Carousel
          className="carouselFirst"
          dataList={carouselData[0].slice(1, 6)}
        />
      )}
      {/* <Carousel className="carouselFirst" dataList={FACIAL_PRODUCTS} /> */}
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
        <div>stores carousel</div>
      </TwoColumnsPromotion>
    </>
  );
};

export default Main;
