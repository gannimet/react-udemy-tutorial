import { Note } from '../../store/models/note';

export interface ViewNoteModalProps {
  note: Note;
  show: boolean;
  onEditButtonClick(): void;
  onClose(): void;
}