export interface ButtonProps {
  type?: 'primary' | 'default';
  onClick?: () => void;
  disabled?: boolean;
}