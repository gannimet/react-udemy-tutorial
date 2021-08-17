import { Note } from '../../store/models/note';

export interface DeleteNoteModalProps {
  note: Note;
  onConfirmDelete(): void;
  show: boolean;
  onClose(): void;
}