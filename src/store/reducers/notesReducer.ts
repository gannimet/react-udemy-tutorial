import { Reducer } from 'redux';
import {
  AddNoteAction,
  DeleteNoteAction,
  EditNoteAction,
  NotesActionType,
  NotesReducerAction
} from '../actions/notesActions';
import { Note } from '../models/note';

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