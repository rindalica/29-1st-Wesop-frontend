import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import SigninForm from './SigninForm/SigninForm';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import { api } from '../../config';
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

  const handleInput = event => {
    const { name, value } = event.target;
    setInputState(curr => ({ ...curr, [name]: value }));
  };

  const submitLogin = async () => {
    const json = await (
      await fetch(api.login, {
        method: 'POST',
        body: JSON.stringify({
          email: inputState.email,
        }),
      })
    ).json();

    const hasAccount = json['sign-in'];
    goToForm(hasAccount ? isSignin : isSignup);
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
            onSubmit={submitLogin}
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
