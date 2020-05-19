import React from 'react';
import './Button.scss';

const Button = ({
  text,
  type = 'button',
  color = 'primary',
  size = 'small',
  onClick,
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
      className={`button ${ButtonColorTypes[color]} ${ButtonSizeTypes[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
