import React, { useState } from 'react';
import FooterSection from './FooterSection/FooterSection';
import { FOOTER } from './footerData';
import './Footer.scss';

const Footer = () => {
  const [inputState, setInputState] = useState({
    email: '',
    ageVerification: false,
  });
  const [isError, setIsError] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleInput = event => {
    const { name, value, checked } = event.target;
    setInputState(curr => ({
      ...curr,
      [name]: name === 'ageVerification' ? checked : value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();
    if (inputState.ageVerification) {
      setIsError(false);
      setIsSubmitSuccess(true);
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 5000);
    } else {
      setIsError(true);
    }
  };

  return (
    <footer className="Footer">
      <div className="footerWrapper">
        <div className={`successMessage${isSubmitSuccess ? ' show' : ''}`}>
          구독해 주셔서 진심으로 감사드립니다. 위솝과 어울리는 분들과 함께
          우리의 관심사항을 함께 나눌 수 있어 기쁩니다.
        </div>

        <div className={`footerBlock${isSubmitSuccess ? ' invisible' : ''}`}>
          <section className="subscribeSection">
            <form className="subscribeForm" onSubmit={onSubmit}>
              <div className="signUpEmail">
                <label className="email">
                  <input
                    name="email"
                    type="email"
                    onChange={handleInput}
                    value={inputState.email || ''}
                  />
                  <span
                    className={`labelText${
                      inputState.email ? ' invisible' : ''
                    }`}
                  >
                    이메일 주소
                  </span>
                </label>
                <button className="subscribeBtn" type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
              <div>
                위솝 제품, 서비스, 스토어, 행사, 문화적 관심사 등 다양한 소식을
                받아볼 수 있도록 구독하세요.
              </div>
              <label className="ageVerification">
                <input
                  name="ageVerification"
                  type="checkbox"
                  onChange={handleInput}
                  checked={inputState.ageVerification}
                />
                <span className="labelText">
                  본인의 만 14세 이상 여부를 확인해주세요.
                </span>
              </label>
              {isError ? (
                <div className="errorMessage">
                  가입자 본인은 만 14세 이상입니다.
                </div>
              ) : null}
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
      </div>
      <div className="fotterBanner">
        <span>© Wesop</span>
      </div>
    </footer>
  );
};

export default Footer;
