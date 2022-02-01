import React from 'react';
import LoginLayout from '../LoginLayout/LoginLayout';
import FormText from '../LoginLayout/FormText/FormText';

const SigninForm = ({
  closeLogin,
  goBack,
  goToForgotPassword,
  inputState,
  handleInput,
  onSubmit,
}) => {
  return (
    <LoginLayout
      mainTitle="위솝에 다시 오신 것을 환영합니다."
      subTitle="패스워드를 입력해주세요."
      btnText="로그인"
      closeLogin={closeLogin}
      goBack={goBack}
      inputState={inputState}
      handleInput={handleInput}
    >
      <FormText
        name="password"
        type="password"
        labelText="패스워드"
        onChange={handleInput}
      />
      <button
        className="forgotPasswordBtn"
        type="button"
        onClick={goToForgotPassword}
      >
        패스워드 재설정하기
      </button>
    </LoginLayout>
  );
};

export default SigninForm;
