import { Note } from '../../store/models/note';

export interface DeleteNoteModalProps {
  note: Note;
  onConfirmDelete(note: Note): void;
  show: boolean;
  onClose(): void;
}