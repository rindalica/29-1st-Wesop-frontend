import React from 'react';
import FooterSection from './FooterSection/FooterSection';
import { FOOTER } from './footerData';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footerWrapper">
        <section className="subscribeSection">
          <form className="subscribeForm">
            <label>
              <input type="email" />
              <span>이메일 주소</span>
            </label>
            <button>
              <i className="fas fa-arrow-right" />
            </button>
            <div>
              위솝 제품, 서비스, 스토어, 행사, 문화적 관심사 등 다양한 소식을
              받아볼 수 있도록 구독하세요.
            </div>
            <label className="checkbox">
              <input type="checkbox" />
              <span>본인의 만 14세 이상 여부를 확인해주세요.</span>
            </label>
          </form>
        </section>

        {FOOTER.map((data, index) => (
          <FooterSection
            key={index}
            className={data.className}
            heading={data.heading}
            list={data.list}
            text={data.text}
          />
        ))}
      </div>
      <div className="fotterBanner">
        <span>© Wesop</span>
      </div>
    </footer>
  );
};

export default Footer;
