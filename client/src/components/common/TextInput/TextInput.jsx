import React from 'react';
import './TextInput.scss';

const TextInput = ({ title, name, onChange, value }) => {
  return (
    <div className="field">
      <label htmlFor={name} className="field__lable">
        {title}
      </label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        className="field__input"
      />
    </div>
  );
};

export default TextInput;
