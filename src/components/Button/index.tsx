import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  onClick = () => {},
  children
}) => {
  return (
    <button className={`button-${type}`} onClick={onClick}>{children}</button>
  )
};

export default Button;