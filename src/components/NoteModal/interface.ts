import { Note } from '../../store/models/note';

export interface NoteModalProps {
  note?: Note;
  onSave(note: Note): void;
  show: boolean;
  onClose(): void;
}

export interface NoteModalState {
  workingTitle: string;
  workingDescription: string;
}