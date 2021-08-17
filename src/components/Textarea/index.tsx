import React from 'react';
import { TextareaProps } from './interface';

const Textarea: React.FC<TextareaProps> = ({ value, placeholder, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
  )
};

export default Textarea;