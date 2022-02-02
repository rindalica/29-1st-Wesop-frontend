import React from 'react';

function Option({ option, onChange }) {
  return (
    <select onChange={onChange}>
      {option.map(({ value }) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
}

export default Option;
