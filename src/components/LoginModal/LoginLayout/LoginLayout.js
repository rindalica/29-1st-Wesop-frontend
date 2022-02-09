import React, { useState } from 'react';
import FormText from './FormText/FormText';
import './LoginLayout.scss';

const LoginLayout = ({
  children,
  mainTitle,
  subTitle,
  btnText,
  isAutoFocus,
  closeLogin,
  isLogin,
  goBack,
  inputState,
  handleInput,
  onSubmit,
}) => {
  const [isEmailError, setIsEmailError] = useState(false);

  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return (
    <div className="LoginLayout">
      {isLogin ? null : (
        <button className="backBtn" type="button" onClick={goBack}>
          <i className="fas fa-arrow-left" />
        </button>
      )}
      <button className="closeBtn" type="button" onClick={closeLogin}>
        <i className="fas fa-times" />
      </button>
      <header className="titleWrapper">
        <h2 className="mainTitle">{mainTitle}</h2>
        <div className="subTitle">{subTitle}</div>
      </header>
      <form
        className="loginForm"
        onSubmit={event => {
          event.preventDefault();

          if (!regEmail.test(inputState.email)) {
            setIsEmailError(true);
            return;
          } else {
            onSubmit();
          }
        }}
      >
        <FormText
          name="email"
          type="email"
          labelText="이메일 주소"
          isAutoFocus={isAutoFocus}
          value={inputState.email}
          onChange={handleInput}
          isError={isEmailError}
          errorMessage="유효한 이메일 주소를 입력해주세요."
        />
        {children}
        <button className="submitBtn" type="submit">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default LoginLayout;
