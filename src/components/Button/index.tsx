import React from 'react';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
};

export default Button;