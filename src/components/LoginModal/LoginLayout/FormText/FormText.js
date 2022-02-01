import React, { useState } from 'react';
import './FormText.scss';

const FormText = ({
  name,
  type,
  value,
  onChange,
  labelText,
  isError,
  errorMessage,
  isAutoFocus,
}) => {
  const [hasValue, setHasValue] = useState(!!value);

  const onInput = event => {
    setHasValue(!!event.target.value);
  };

  return (
    <div className="FormText">
      <label>
        <input
          className={`inputText ${hasValue ? 'hasValue' : ''}`}
          name={name}
          type={type}
          autoFocus={isAutoFocus}
          value={value}
          onChange={onChange}
          onInput={onInput}
        />
        <span className="labelText">{labelText}</span>
      </label>
      {isError ? <div className="errorMessage">{errorMessage}</div> : null}
    </div>
  );
};

export default FormText;
