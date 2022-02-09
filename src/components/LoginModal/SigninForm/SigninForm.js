import React from 'react';
import LoginLayout from '../LoginLayout/LoginLayout';
import FormText from '../LoginLayout/FormText/FormText';
import { api } from '../../../config';

const SigninForm = ({
  closeLogin,
  goBack,
  goToForgotPassword,
  inputState,
  handleInput,
}) => {
  const { email, password } = inputState;

  const submitSignin = async () => {
    const json = await (
      await fetch(api.signIn, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
      })
    ).json();

    if (json.message === 'SUCCESS') {
      sessionStorage.setItem('ACCESS_TOKEN', json.ACCESS_TOKEN);
    }
  };

  return (
    <LoginLayout
      mainTitle="위솝에 다시 오신 것을 환영합니다."
      subTitle="패스워드를 입력해주세요."
      btnText="로그인"
      closeLogin={closeLogin}
      goBack={goBack}
      inputState={inputState}
      handleInput={handleInput}
      onSubmit={submitSignin}
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
