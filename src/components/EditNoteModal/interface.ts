import { Note } from '../../store/models/note';

export interface EditNoteModalProps {
  note?: Note;
  onSave(note: Note): void;
  show: boolean;
  onClose(): void;
}

export interface EditNoteModalState {
  workingTitle: string;
  workingDescription: string;
}