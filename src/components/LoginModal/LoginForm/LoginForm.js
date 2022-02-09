import React from 'react';
import LoginLayout from '../LoginLayout/LoginLayout';

const LoginForm = ({
  isLogin,
  closeLogin,
  inputState,
  handleInput,
  onSubmit,
}) => {
  return (
    <LoginLayout
      mainTitle="안녕하세요."
      subTitle="로그인 및 회원가입을 위한 이메일 주소를 입력 부탁드립니다."
      btnText="계속"
      isAutoFocus={true}
      closeLogin={closeLogin}
      isLogin={isLogin}
      inputState={inputState}
      handleInput={handleInput}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
