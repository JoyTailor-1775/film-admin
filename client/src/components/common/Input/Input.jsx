import React from 'react';
import './Input.scss';

const SUPPORTED_TYPES = Object.freeze({
  text: 'text',
  number: 'number',
});

const Input = ({ title, name, type, onChange, value, maxLength, min, max }) => {
  return (
    <div className="field">
      <label htmlFor={name} className="field__lable">
        {title}
      </label>
      <input
        type={SUPPORTED_TYPES[type] ? SUPPORTED_TYPES[type] : 'text'}
        name={name}
        onChange={onChange}
        value={value}
        className="field__input"
        maxLength={maxLength && maxLength}
        min={min && min}
        max={max && max}
      />
    </div>
  );
};

export default Input;
