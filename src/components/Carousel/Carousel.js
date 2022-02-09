import React, { useState } from 'react';
import CarouselItem from './CarouselItem/CarouselItem';
import './Carousel.scss';

const Carousel = ({
  className,
  dataList,
  showingItemCount,
  isListPage,
  hasIntroduction,
  introduction,
  isLoop,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  if (!showingItemCount) showingItemCount = 3;

  const totalItemCount = hasIntroduction
    ? dataList.length + 1
    : dataList.length;

  let movingIndex = isLoop ? slideIndex + 1 : slideIndex;

  const onClick = event => {
    const isPrev = event.target.className.includes('prev');
    const isNext = event.target.className.includes('next');

    if (isPrev) {
      if (isLoop && slideIndex === 0) {
        movingIndex = -1;
        setSlideIndex(totalItemCount - 1);
      } else {
        setSlideIndex(curr => --curr);
      }
    }

    if (isNext) {
      if (isLoop && slideIndex === totalItemCount - 1) {
        movingIndex = totalItemCount;
        setSlideIndex(0);
      } else {
        setSlideIndex(curr => ++curr);
      }
    }
  };

  const firstSlide =
    slideIndex === 0 && !isLoop
      ? {
          style: { transform: 'translateX(-80px)' },
        }
      : null;

  const lastSlide =
    slideIndex === totalItemCount - Math.floor(showingItemCount) && !isLoop
      ? {
          style: { transform: 'translateX(80px)' },
        }
      : null;

  return (
    <div className={`Carousel ${className}`}>
      <button
        className="navigation prev"
        onClick={onClick}
        style={firstSlide && firstSlide.style}
        disabled={firstSlide}
      >
        <i className="fas fa-chevron-left prev" />
      </button>

      <div
        className="itemWrapper"
        style={{
          transform: `translateX(calc(-100% / ${showingItemCount} * ${movingIndex}))`,
        }}
      >
        {hasIntroduction && (
          <div className="CarouselItem">
            <h2 className="introduction">{introduction}</h2>
          </div>
        )}

        {isLoop
          ? null
          : dataList?.map(data => (
              <CarouselItem
                key={data.product_id}
                heading={data.product_name}
                description={data.product_description}
                alt={data.product_name}
                src={data.image_url}
                link={data.product_id}
                isListPage={isListPage}
                detail={data.product_detail}
              />
            ))}

        {isLoop && (
          <CarouselItem
            heading={dataList[dataList.length - 1].name}
            description={dataList[dataList.length - 1].description}
            alt={dataList[dataList.length - 1].name}
            src={dataList[dataList.length - 1].src}
          />
        )}
        {isLoop &&
          dataList.map(data => (
            <CarouselItem key={data.id} src={data.src} isLoop={isLoop} />
          ))}
        {isLoop && (
          <CarouselItem
            heading={dataList[0].name}
            description={dataList[0].description}
            alt={dataList[0].name}
            src={dataList[0].src}
          />
        )}
      </div>

      <button
        className="navigation next"
        onClick={onClick}
        style={lastSlide && lastSlide.style}
        disabled={lastSlide}
      >
        <i className="fas fa-chevron-right next" />
      </button>

      {isListPage ? null : (
        <div className="pagination">
          <div
            className="current"
            style={{
              width: `calc(100% / ${
                totalItemCount - (Math.floor(showingItemCount) - 1)
              })`,
              transform: `translateX(calc(100% * ${slideIndex}))`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
