import React, { useState } from 'react';
import './FormText.scss';

const FormText = ({
  className,
  name,
  type,
  value,
  onChange,
  labelText,
  isError,
  errorMessage,
  onBlur,
  isAutoFocus,
}) => {
  const [hasValue, setHasValue] = useState(!!value);

  const onInput = event => {
    setHasValue(!!event.target.value);
  };

  return (
    <div
      className={`FormText${className ? ` ${className}` : ' inputTextWrapper'}`}
    >
      <label>
        <input
          className={`inputText${hasValue ? ' hasValue' : ''}`}
          name={name}
          type={type}
          autoFocus={isAutoFocus}
          value={value}
          onChange={onChange}
          onInput={onInput}
          onBlur={onBlur}
        />
        <span className="labelText">{labelText}</span>
      </label>
      {isError ? <div className="errorMessage">{errorMessage}</div> : null}
    </div>
  );
};

export default FormText;
