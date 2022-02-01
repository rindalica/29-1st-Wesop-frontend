import React from 'react';

function Option({ option, onChange }) {
  return (
    <select onChange={onChange}>
      {option.map(({ value, num }) => {
        return (
          <option key={value} value={value}>
            {num}
          </option>
        );
      })}
    </select>
  );
}

export default Option;
