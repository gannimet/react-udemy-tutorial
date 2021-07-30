import { ChangeEventHandler } from 'react';

export interface InputProps {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: any;
  errorMessage: string;
  hasError: boolean;
}