import { Note } from '../models/note';

export enum NotesActionType {
  AddNote = 'AddNote',
  DeleteNode = 'DeleteNode',
  EditNode = 'EditNode',
}

export interface NotesReducerAction {
  readonly type: NotesActionType;
}

export class AddNoteAction implements NotesReducerAction {
  readonly type = NotesActionType.AddNote;
  
  constructor(public note: Note) {}
}

export class DeleteNoteAction implements NotesReducerAction {
  readonly type = NotesActionType.DeleteNode;
  
  constructor(public note: Note) {}
}

export class EditNoteAction implements NotesReducerAction {
  readonly type = NotesActionType.EditNode;
  
  constructor(public oldNote: Note, public newNote: Note) {}
}

class NotesActions {
  addNote = (note: Note): AddNoteAction => {
    return new AddNoteAction(note);
  }

  deleteNote = (note: Note): DeleteNoteAction => {
    return new DeleteNoteAction(note);
  }

  editNote = (oldNote: Note, newNote: Note): EditNoteAction => {
    return new EditNoteAction(oldNote, newNote);
  }
}

export default NotesActions;