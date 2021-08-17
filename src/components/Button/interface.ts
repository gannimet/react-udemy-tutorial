import React from 'react';

export interface ButtonProps {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'default';
}