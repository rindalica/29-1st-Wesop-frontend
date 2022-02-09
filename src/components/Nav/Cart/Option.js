import React from 'react';

function Option({ option, onChange, onClick }) {
  return (
    <div className="Option">
      <select onChange={onChange}>
        {option.map(({ value }) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <button className="deleteBtn" onClick={onClick}>
        삭제
      </button>
    </div>
  );
}

export default Option;
