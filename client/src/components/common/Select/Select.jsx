import React from 'react';
import './Select.scss';

/*
  A Select component needs next required parameters to be used:
    1) title: String - a title of the select.
    2) value: any - a value of the input.
    3) name: String - html-attribute.
    4) options: [any] - a value options for the select.
    5) onChange : Function - a method, which will be called, when the select value
       changes;
*/

const Select = ({ title, value, name, options, onChange }) => {
  return (
    <div className="select__wrapper">
      <label className="select__label">{title}</label>
      <select className="select" name={name} value={value} onChange={onChange}>
        <option className="select__option default" value="" disabled hidden>
          {`Select ${title}...`}
        </option>
        {options.map((el, idx) => {
          return (
            <option className="select__option" value={el.val} key={idx}>
              {el.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
