import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({ type = 'default', onClick = () => {}, disabled = false, children }) => {
  const className = type === 'primary' ? 'primary' : 'default';

  return (
    <button disabled={disabled} className={className} onClick={onClick}>{children}</button>
  )
};