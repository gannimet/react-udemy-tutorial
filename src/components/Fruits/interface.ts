export interface FruitsOwnProps {
  ownerName: string;
}

export interface FruitsStateProps {
  fruits: string[];
}

export interface FruitsDispatchProps {
  addFruits(fruits: string[]): void;
}

export type FruitsProps = FruitsOwnProps & FruitsStateProps & FruitsDispatchProps;