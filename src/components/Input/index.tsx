import React from 'react';
import { InputProps, InputState } from './interface';
import './style.css';

class Input extends React.Component<InputProps, InputState> {
  render() {
    const { label, onChange, hasError } = this.props;

    return (
      <div className="input-field">
        <label className={hasError ? 'has-error' : ''}>
          <div>{label}</div>
          <input onChange={onChange} />
        </label>
      </div>
    )
  }
}

export default Input;