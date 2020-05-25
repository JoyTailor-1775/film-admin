import React from 'react';
import './Input.scss';

/*
  A Input component needs next required parameters to be used:
    1) title: String - a title of the button.
    2) onChange : Function - a method, which will be called, when the input value is
        changed;
    3) value: any - a value of the input.
    4) name: - corredponds with <input/> html-attribute - 'name'.

  The Input also has optional parameters:
    1) type: String (default value - 'text') - parameter corresponds with 
        the html-attribute of the <input/> tag. The parameter may have next values:
        - number
        - text
    2) maxLength: String - parameter corresponds with the html-attribute of 
        the <input/> tag. 
    3) min , max : String - parameters are used with 'number' type, correspond
        with the html-attribute of the <input/> tag.
*/

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
