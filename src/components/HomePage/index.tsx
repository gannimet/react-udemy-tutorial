import React, { Dispatch } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { NotesActionType } from '../../store/actions/notesActions';
import { Note } from '../../store/models/note';
import { AddNoteAction, DeleteNoteAction, EditNoteAction, NotesReducerAction } from '../../store/reducers/notesReducer';
import { StoreStateType } from '../../store/reducers/rootReducer';
import Button from '../Button';
import DeleteNoteModal from '../DeleteNoteModal';
import NoteModal from '../NoteModal';
import { HomePageDispatchProps, HomePageOwnProps, HomePageProps, HomePageState, HomePageStateProps } from './interface';
import './style.css';

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      showEditNoteModal: false,
      showDeleteNoteModal: false,
      editingNote: undefined,
      deletingNote: undefined,
    };
  }

  openNoteModal = (editingNote?: Note) => {
    this.setState({
      showEditNoteModal: true,
      editingNote,
    })
  }

  closeEditNoteModal = () => {
    this.setState({
      showEditNoteModal: false,
    })
  }

  openDeleteNoteModal = (note: Note, event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.stopPropagation();
    this.setState({
      showDeleteNoteModal: true,
      deletingNote: note,
    })
  }

  closeDeleteNoteModal = () => {
    this.setState({
      showDeleteNoteModal: false,
      deletingNote: undefined,
    })
  }

  handleNoteModalSave = (note: Note) => {
    const { editingNote } = this.state;

    this.setState({
      showEditNoteModal: false,
      editingNote: undefined,
    })

    if (editingNote) {
      this.props.editNode(editingNote, note);
    } else {
      this.props.addNote(note);
    }
  }

  handleDeleteNote = (note: Note) => {
    this.setState({
      showDeleteNoteModal: false,
      deletingNote: undefined,
    })

    this.props.deleteNote(note);
  }

  private formatDate(date: Date): string {
    return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
  }

  render() {
    const { showEditNoteModal, showDeleteNoteModal, editingNote, deletingNote } = this.state;
    const { notes } = this.props;

    return (
      <div>
        <h1>My Notes</h1>

        {showEditNoteModal && <NoteModal
          show={showEditNoteModal}
          onClose={this.closeEditNoteModal}
          onSave={this.handleNoteModalSave}
          note={editingNote} />}

        {showDeleteNoteModal && deletingNote && <DeleteNoteModal
          show={showDeleteNoteModal}
          onClose={this.closeDeleteNoteModal}
          onConfirmDelete={(note) => this.handleDeleteNote(note)}
          note={deletingNote} />}

        <Button onClick={() => this.openNoteModal()}>Add Note</Button>
        <ul className="notes-list">
          {notes.map((note) => {
            return (
              <li
                key={`${note.title}-${note.description}`}
                className="notes-list-item"
                onClick={() => this.openNoteModal(note)}>
                <div className="notes-list-item__header-row">
                  <h2>{note.title}</h2>
                  <img
                    className="delete-note-icon"
                    onClick={(event) => this.openDeleteNoteModal(note, event)}
                    src="/delete.png"
                    alt="Delete Note" />
                </div>
                <p className="note-description">{note.description}</p>
                <div className="note-last-modified">
                  Last modified: {this.formatDate(note.lastModified)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<HomePageStateProps, HomePageOwnProps, StoreStateType> = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<HomePageDispatchProps, HomePageOwnProps> = (dispatch: Dispatch<NotesReducerAction>) => {
  return {
    addNote: (note) => dispatch({ type: NotesActionType.AddNote, note } as AddNoteAction),
    deleteNote: (note) => dispatch({ type: NotesActionType.DeleteNode, note } as DeleteNoteAction),
    editNode: (oldNote, newNote) => dispatch({type: NotesActionType.EditNode, oldNote, newNote } as EditNoteAction),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);