import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import SigninForm from './SigninForm/SigninForm';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import './LoginModal.scss';

const LoginModal = ({ isLoginOpen, setIsLoginOpen }) => {
  const [isLogin, isSignup, isSignin, isForgotPassword] = [
    'isLogin',
    'isSignup',
    'isSignin',
    'isForgotPassword',
  ];

  const [modalState, setModalState] = useState({
    [isLogin]: true,
    [isSignup]: false,
    [isSignin]: false,
    [isForgotPassword]: false,
  });

  const [inputState, setInputState] = useState({
    email: '',
  });

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const goToForm = whereToGo => {
    setModalState(curr => ({
      ...Object.fromEntries(
        Object.entries(curr).map(([key, value]) => [key, false])
      ),
      [whereToGo]: true,
    }));
  };

  const submitEmail = () => {
    const hasAccount = false;
    goToForm(hasAccount ? isSignin : isSignup);
  };

  const handleInput = event => {
    const { name, value } = event.target;
    setInputState(curr => ({ ...curr, [name]: value }));
  };

  const postData = async () => {
    const json = await (
      await fetch('', {
        method: 'POST',
        body: JSON.stringify({
          email: inputState.email,
        }),
      })
    ).json();
  };

  return isLoginOpen ? (
    <div className="LoginModal">
      <div className="modalInner">
        <div className="modalBackground" />
        {modalState.isLogin ? (
          <LoginForm
            closeLogin={closeLogin}
            isLogin={modalState.isLogin}
            inputState={inputState}
            handleInput={handleInput}
            onSubmit={submitEmail}
          />
        ) : null}

        {modalState.isSignup ? (
          <SignupForm
            closeLogin={closeLogin}
            goBack={() => goToForm(isLogin)}
            goToSignin={() => goToForm(isSignin)}
            inputState={inputState}
            handleInput={handleInput}
          />
        ) : null}

        {modalState.isSignin ? (
          <SigninForm
            closeLogin={closeLogin}
            goBack={() => goToForm(isLogin)}
            goToForgotPassword={() => goToForm(isForgotPassword)}
            inputState={inputState}
            handleInput={handleInput}
          />
        ) : null}

        {modalState.isForgotPassword ? (
          <ForgotPasswordForm
            closeLogin={closeLogin}
            goBack={() => goToForm(isSignin)}
            inputState={inputState}
            handleInput={handleInput}
          />
        ) : null}
      </div>
    </div>
  ) : null;
};

export default LoginModal;
