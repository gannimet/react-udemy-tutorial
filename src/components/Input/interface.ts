import React from 'react';

export interface InputProps {
  label: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  hasError: boolean;
}

export interface InputState {}