export interface Person {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface WithPersonsProps {}

export interface WithPersonsState {
  persons: Person[];
}

export interface WrappedComponentProps {
  persons: Person[];
}