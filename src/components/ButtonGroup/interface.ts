export interface ButtonGroupProps {
  selected?: number;
  onClick?(index: number): void;
  direction?: 'row' | 'column';
}

export interface ButtonGroupState {}