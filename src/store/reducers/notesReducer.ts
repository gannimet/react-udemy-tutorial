import { Reducer } from 'redux';
import { NotesActionType } from '../actions/notesActions';
import { Note } from '../models/note';

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

export const notesReducer: Reducer<Note[], NotesReducerAction> = (state = [], action): Note[] => {
  const newState = [...state];

  switch (action.type) {
    case NotesActionType.AddNote:
      return [...newState, (action as AddNoteAction).note];
    case NotesActionType.DeleteNode:
      newState.splice(state.indexOf((action as DeleteNoteAction).note), 1);
      return newState;
    case NotesActionType.EditNode:
      const editAction = action as EditNoteAction;
      const index = state.indexOf(editAction.oldNote);
      newState[index] = editAction.newNote;
      return newState;
    default:
      return newState;
  }
};