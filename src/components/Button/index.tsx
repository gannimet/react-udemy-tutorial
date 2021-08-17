import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  disabled = false,
  type = 'default',
  children
}) => {
  return (
    <button
      className={`button-${type}`}
      disabled={disabled}
      onClick={onClick}>{children}</button>
  )
};

export default Button;