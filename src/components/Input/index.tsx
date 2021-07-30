import React from 'react';
import { InputProps } from './interface';
import './style.css';

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="input-field">
      <label className={props.hasError ? 'has-error' : ''}>
        {props.label}
        <br />
        <input
          className={props.hasError ? 'has-error' : ''}
          ref={ref}
          type="text"
          value={props.value}
          onChange={props.onChange} />
        <br />
        {props.hasError && <div className="input-field__error">{props.errorMessage}</div>}
      </label>
    </div>
  )
});