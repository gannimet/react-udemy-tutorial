export interface ModalProps {
  show?: boolean;
  onClose?(): void;
}

export interface ModalState {
  weekdayName: string;
}