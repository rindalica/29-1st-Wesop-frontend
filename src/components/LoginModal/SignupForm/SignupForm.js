import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginLayout from '../LoginLayout/LoginLayout';
import FormText from '../LoginLayout/FormText/FormText';
import { api } from '../../../config';

const SignupForm = ({
  closeLogin,
  goBack,
  goToSignin,
  inputState,
  handleInput,
}) => {
  const history = useHistory();

  // FIXME: 유효성검사 추가 예정
  // pw: 8자 이상, 대소문자+숫자+특수문자

  const isError =
    inputState.password &&
    inputState.passwordConfirmation &&
    inputState.password !== inputState.passwordConfirmation;

  const submitSignup = async () => {
    const json = await (
      await fetch(api.signUp, {
        method: 'POST',
        body: JSON.stringify({
          email: inputState.email,
          password: inputState.password,
          'last-name': inputState.lastName,
          'first-name': inputState.firstName,
        }),
      })
    ).json();

    if (json.message === 'SUCCESS') {
      history.push({
        search: `?id=${json.user.user_id}`,
      });
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
      />
      <FormText
        name="passwordConfirmation"
        type="password"
        labelText="패스워드 확인"
        onChange={handleInput}
        isError={isError}
        errorMessage="이전에 사용했던 패스워드를 입력하세요."
      />
      <div className="name">
        <FormText
          name="lastName"
          type="text"
          labelText="성"
          onChange={handleInput}
        />
        <FormText
          name="firstName"
          type="text"
          labelText="이름"
          onChange={handleInput}
        />
      </div>

      <label>
        <input type="checkbox" />
        <span>가입자 본인은 만 14세 이상입니다.</span>
      </label>
      <label>
        <input type="checkbox" />
        <span>이용 약관에 동의합니다.</span>
      </label>
      <button type="button" onClick={goToSignin}>
        위솝 계정을 가지고 계십니까?
      </button>
    </LoginLayout>
  );
};

export default SignupForm;
