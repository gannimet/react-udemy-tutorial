import React from 'react';
import { InputProps } from './interface';

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
  )
};

export default Input;