import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Main.scss';

const Home = () => {
  return (
    <section className="Home">
      <figure className="homeImg">
        <picture>
          <img alt="Healthy" src="/images/main/main-1-wide.jpg" />
        </picture>
      </figure>
      <div className="logo">
        <Link to="/">
          <img alt="logo" src="/images/logo-ivory.png" />
        </Link>
      </div>
      <div className="homeContentWrapper">
        <header>
          <h2>시간의 가치</h2>
          <h1>건강한 피부는 서두르지 않습니다</h1>
        </header>
        <div className="homeContent">
          모든 위솝 제품은 수년에 걸친 고민과 엄격함을 거쳐 탄생합니다.
          하이드레이터도 예외는 아닙니다. 과학적으로 확인된 성분과 지혜가 합쳐져
          지속적인 효과를 전달합니다.
        </div>
        <Button link="/products-list" content="사려 깊은 영양 제품 보기" />
      </div>
    </section>
  );
};

const MainSection = () => {
  return (
    <div className="MainSection">
      <article>
        <h2>스킨 케어 루틴을 관리하는 방법</h2>
      </article>
      <div className="sideImg">
        <img alt="cosmetics" src="/images/main/main-2.jpg" />
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <Home />
      <MainSection />
    </>
  );
};

export default Main;
