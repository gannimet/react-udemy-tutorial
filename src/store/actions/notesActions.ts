import { Note } from '../models/note';
import { AddNoteAction, DeleteNoteAction, EditNoteAction, NotesReducerAction } from '../reducers/notesReducer';

export enum NotesActionType {
  AddNote = 'AddNote',
  DeleteNode = 'DeleteNode',
  EditNode = 'EditNode',
}

class NotesActions {
  addNote = (note: Note): NotesReducerAction => {
    return new AddNoteAction(note);
  }

  deleteNote = (note: Note): NotesReducerAction => {
    return new DeleteNoteAction(note);
  }

  editNote = (oldNote: Note, newNote: Note): NotesReducerAction => {
    return new EditNoteAction(oldNote, newNote);
  }
}

export default NotesActions;