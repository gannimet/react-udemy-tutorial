import React from 'react';
import { ButtonProps } from './interface';

const Button = React.memo<ButtonProps>(({ onClick }) => {
  console.log('rerender Button');
  return (
    <button onClick={onClick}>Add Value</button>
  )
});

export default Button;