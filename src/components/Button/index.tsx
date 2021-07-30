import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({ type = 'default', onClick = () => {}, children }) => {
  const className = type === 'primary' ? 'primary' : '';

  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
};