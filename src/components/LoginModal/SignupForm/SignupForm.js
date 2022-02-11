import React, { useState } from 'react';
import LoginLayout from '../LoginLayout/LoginLayout';
import FormText from '../LoginLayout/FormText/FormText';
import { api } from '../../../config';

const SignupForm = ({
  setIsLoginOpen,
  closeLogin,
  goBack,
  goToSignin,
  inputState,
  handleInput,
  goToForm,
}) => {
  const [checkboxState, setCheckboxState] = useState({
    ageVerification: { isChecked: false, isError: false },
    loginTerms: { isChecked: false, isError: false },
  });

  const [errorState, setErrorState] = useState({
    password: false,
    lastName: false,
    firstName: false,
  });

  const { email, password, passwordConfirmation, lastName, firstName } =
    inputState;

  const { ageVerification, loginTerms } = checkboxState;

  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isPasswordConfirmationError =
    password && passwordConfirmation && password !== passwordConfirmation;

  const testUserNameValid = event => {
    const name = event.target.name;
    setErrorState(curr => ({
      ...curr,
      [name]: !inputState[name],
    }));
  };

  const handleCheckbox = event => {
    const { name, checked } = event.target;
    setCheckboxState(curr => ({
      ...curr,
      [name]: { isChecked: checked, isError: !checked },
    }));
  };

  const submitSignup = async () => {
    if (!(ageVerification.isChecked && loginTerms.isChecked)) {
      if (!ageVerification.isChecked) {
        setCheckboxState(curr => ({
          ...curr,
          ageVerification: { isChecked: false, isError: true },
        }));
      }

      if (!loginTerms.isChecked) {
        setCheckboxState(curr => ({
          ...curr,
          loginTerms: { isChecked: false, isError: true },
        }));
      }
      return;
    }

    setErrorState(curr => ({
      ...curr,
      lastName: !lastName,
      firstName: !firstName,
    }));

    if (
      Object.values(errorState).some(val => val) ||
      isPasswordConfirmationError
    )
      return;

    const response = await fetch(api.signUp, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        'last-name': lastName,
        'first-name': firstName,
      }),
    });
    if (response.ok) {
      alert('가입을 축하드립니다. 다시 로그인해 주시기 바랍니다.');
      setIsLoginOpen(false);
      goToForm('isSignin');
    } else {
      alert('올바른 형식으로 입력해 주시길 바랍니다.');
    }
  };

  return (
    <LoginLayout
      mainTitle="위솝에 오신 것을 환영합니다."
      subTitle="회원가입을 위해 아래의 세부 정보를 작성해주세요."
      btnText="등록"
      closeLogin={closeLogin}
      goBack={goBack}
      inputState={inputState}
      handleInput={handleInput}
      onSubmit={submitSignup}
    >
      <FormText
        name="password"
        type="password"
        labelText="패스워드"
        onChange={handleInput}
        onBlur={event => {
          setErrorState(curr => ({
            ...curr,
            [event.target.name]: !regPassword.test(inputState.password),
          }));
        }}
        isError={errorState.password}
        errorMessage="알파벳 대소문자, 숫자, 특수문자 포함 8자리 이상 입력해주세요."
      />
      <FormText
        name="passwordConfirmation"
        type="password"
        labelText="패스워드 확인"
        onChange={handleInput}
        isError={isPasswordConfirmationError}
        errorMessage="이전에 사용했던 패스워드를 입력하세요."
      />
      <div className="name">
        <FormText
          name="lastName"
          type="text"
          labelText="성"
          onChange={handleInput}
          onBlur={testUserNameValid}
          isError={errorState.lastName}
          errorMessage="성을 입력하세요."
        />
        <FormText
          name="firstName"
          type="text"
          labelText="이름"
          onChange={handleInput}
          onBlur={testUserNameValid}
          isError={errorState.firstName}
          errorMessage="이름을 입력하세요."
        />
      </div>
      <FormText
        className="checkboxWrapper"
        name="ageVerification"
        type="checkbox"
        labelText="가입자 본인은 만 14세 이상입니다."
        onChange={handleCheckbox}
        isError={ageVerification.isError}
        errorMessage="본인의 만 14세 이상 여부를 확인해주세요."
      />
      <FormText
        className="checkboxWrapper"
        name="loginTerms"
        type="checkbox"
        labelText="이용 약관에 동의합니다."
        onChange={handleCheckbox}
        isError={loginTerms.isError}
        errorMessage="이용 약관에 동의하였는지 확인하십시오."
      />
      <div className="haveAccount">
        <button className="haveAccountBtn" type="button" onClick={goToSignin}>
          위솝 계정을 가지고 계십니까?
        </button>
      </div>
    </LoginLayout>
  );
};

export default SignupForm;
