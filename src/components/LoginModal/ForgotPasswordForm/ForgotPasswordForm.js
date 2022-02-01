import React from 'react';
import LoginLayout from '../LoginLayout/LoginLayout';

const ForgotPasswordForm = ({
  closeLogin,
  goBack,
  inputState,
  handleInput,
}) => {
  return (
    <LoginLayout
      mainTitle="패스워드 재설정하기"
      subTitle="새 패스워드를 만들기 위한 링크를 전송해드립니다."
      btnText="보내기"
      closeLogin={closeLogin}
      goBack={goBack}
      inputState={inputState}
      handleInput={handleInput}
    />
  );
};

export default ForgotPasswordForm;
