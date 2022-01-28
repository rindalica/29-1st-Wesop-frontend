import React from 'react';

const Login = ({ children, mainTitle, subTitle, btnText }) => {
  const onSubmit = event => {
    event.preventDefault();
    console.log('submitted');
  };
  return (
    <div className="Login">
      <header>
        <h2>{mainTitle}</h2>
        <div>{subTitle}</div>
      </header>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="이메일 주소" />
        {children}
        <button type="submit">{btnText}</button>
      </form>
    </div>
  );
};

export default Login;
