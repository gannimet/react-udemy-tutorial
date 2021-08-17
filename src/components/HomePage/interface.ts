import { Note } from '../../store/models/note';

export interface HomePageOwnProps {}

export interface HomePageStateProps {
  notes: Note[];
}

export interface HomePageDispatchProps {
  addNote(note: Note): void;
  deleteNote(note: Note): void;
  editNode(oldNote: Note, newNote: Note): void;
}

export type HomePageProps = HomePageOwnProps & HomePageStateProps & HomePageDispatchProps;

export interface HomePageState {
  showEditNoteModal: boolean;
  showDeleteNoteModal: boolean;
  showViewNoteModal: boolean;
  selectedNote: Note | undefined;
}