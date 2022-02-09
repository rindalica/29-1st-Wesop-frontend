import React from 'react';
import LoginLayout from '../LoginLayout/LoginLayout';

const ForgotPasswordForm = ({
  closeLogin,
  goBack,
  inputState,
  handleInput,
}) => {
  const onSubmit = () => {
    alert('링크가 전송되었습니다.');
  };

  return (
    <LoginLayout
      mainTitle="패스워드 재설정하기"
      subTitle="새 패스워드를 만들기 위한 링크를 전송해드립니다."
      btnText="보내기"
      closeLogin={closeLogin}
      goBack={goBack}
      inputState={inputState}
      handleInput={handleInput}
      onSubmit={onSubmit}
    />
  );
};

export default ForgotPasswordForm;
