import React from 'react';
import './Button.scss';

/*
  A Button component needs next required parameters to be used:
    1) text: String - a title of the button.
    2) onClick : Function - a method, which will be called, when the button is clicked.

  The Button also has optional parameters:
    1) type: String (default value - 'button') - parameter corresponds with 
      html-attribute of the <button/> tag. The parameter may have next values:
        - button 
        - text 
    2) color: String (default value - 'primary') - defines the component color. 
      May accept next values: 
        - primary 
        - regular 
        - action 
        - error 
    3) size: String (default value - 'small') - defines the size of the component.
      May accept next values:
        - small 
        - medium 
        - hard 
    4) form: Sting - this parameter is used with 'submit' button type. In case if the
      component is used outside its form, the neccessary form name may be passed to the
      component.
*/

const Button = ({
  text,
  onClick,
  type = 'button',
  color = 'primary',
  size = 'small',
  form,
}) => {
  const ButtonActionTypes = Object.freeze({
    button: 'button',
    submit: 'submit',
  });

  const ButtonColorTypes = Object.freeze({
    primary: 'primary',
    error: 'error',
    action: 'action',
    regular: 'regular',
  });

  const ButtonSizeTypes = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
  });

  return (
    <button
      type={ButtonActionTypes[type]}
      className={`button ${
        ButtonColorTypes[color] ? ButtonColorTypes[color] : 'regular'
      } ${ButtonSizeTypes[size] ? ButtonSizeTypes[size] : 'small'}`}
      onClick={onClick}
      form={form && form}
    >
      {text}
    </button>
  );
};

export default Button;
