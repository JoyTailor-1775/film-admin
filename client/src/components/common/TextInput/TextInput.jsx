import React from 'react';

const TextInput = ({ title, name, onChange, value }) => {
  return (
    <div className="input__wrapper">
      <label htmlFor={name} className="input__lable">
        {title}
      </label>
      <input type="text" onChange={onChange} value={value} className="input" />
    </div>
  );
};

export default TextInput;
