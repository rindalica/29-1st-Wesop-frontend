import React, { useState } from 'react';
import LoginLayout from '../LoginLayout/LoginLayout';
import FormText from '../LoginLayout/FormText/FormText';
import { api } from '../../../config';

const SigninForm = ({
  setIsLoginOpen,
  closeLogin,
  goBack,
  goToForgotPassword,
  inputState,
  handleInput,
}) => {
  const [errorState, setErrorState] = useState({
    isError: false,
    errorMessage: null,
  });

  const { isError, errorMessage } = errorState;
  const { email, password } = inputState;

  const submitSignin = async () => {
    const response = await fetch(api.signIn, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await response.json();

    if (response.ok) {
      setErrorState({
        isError: false,
        errorMessage: null,
      });
      sessionStorage.setItem('ACCESS_TOKEN', json.ACCESS_TOKEN);
      setIsLoginOpen(false);
    } else if (response.status === 401) {
      setErrorState({
        isError: true,
        errorMessage:
          '귀하의 이메일과 패스워드가 일치하지 않습니다. 다시 시도하십시오.',
      });
    } else if (response.status === 404) {
      setErrorState({
        isError: true,
        errorMessage: '존재하지 않는 계정입니다.',
      });
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
        isError={isError}
        errorMessage={errorMessage}
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
