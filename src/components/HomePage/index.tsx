import React, { Dispatch } from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { AddNoteAction, DeleteNoteAction, EditNoteAction, NotesActionType, NotesReducerAction } from '../../store/actions/notesActions';
import { Note } from '../../store/models/note';
import { StoreStateType } from '../../store/reducers/rootReducer';
import Button from '../Button';
import DeleteNoteModal from '../DeleteNoteModal';
import EditNoteModal from '../EditNoteModal';
import ViewNoteModal from '../ViewNoteModal';
import { HomePageDispatchProps, HomePageOwnProps, HomePageProps, HomePageState, HomePageStateProps } from './interface';
import './style.css';

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      showEditNoteModal: false,
      showDeleteNoteModal: false,
      showViewNoteModal: false,
      selectedNote: undefined,
    };
  }

  openEditNoteModal = (editingNote?: Note) => {
    this.setState({
      showEditNoteModal: true,
      selectedNote: editingNote,
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
      selectedNote: note,
    })
  }

  closeDeleteNoteModal = () => {
    this.setState({
      showDeleteNoteModal: false,
      selectedNote: undefined,
    })
  }

  openViewNoteModal = (note: Note) => {
    this.setState({
      showViewNoteModal: true,
      selectedNote: note,
    })
  }

  closeViewNoteModal = (openEditModal: boolean) => {
    this.setState({
      showViewNoteModal: false,
      showEditNoteModal: openEditModal,
      selectedNote: openEditModal ? this.state.selectedNote : undefined,
    })
  }

  handleNoteModalSave = (note: Note) => {
    const { selectedNote } = this.state;

    this.setState({
      showEditNoteModal: false,
      selectedNote: undefined,
    })

    if (selectedNote) {
      this.props.editNode(selectedNote, note);
    } else {
      this.props.addNote(note);
    }
  }

  handleDeleteNote = () => {
    const { selectedNote } = this.state;

    if (!selectedNote) {
      return;
    }

    this.props.deleteNote(selectedNote);

    this.setState({
      showDeleteNoteModal: false,
      selectedNote: undefined,
    })
  }

  private formatDate(date: Date): string {
    return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
  }

  render() {
    const {
      showEditNoteModal,
      showDeleteNoteModal,
      showViewNoteModal,
      selectedNote
    } = this.state;
    const { notes } = this.props;

    return (
      <div>
        <h1>My Notes</h1>

        {showViewNoteModal && selectedNote && <ViewNoteModal
          show={showViewNoteModal}
          note={selectedNote}
          onClose={() => this.closeViewNoteModal(false)}
          onEditButtonClick={() => this.closeViewNoteModal(true)} />}

        {showEditNoteModal && <EditNoteModal
          show={showEditNoteModal}
          onClose={this.closeEditNoteModal}
          onSave={this.handleNoteModalSave}
          note={selectedNote} />}

        {showDeleteNoteModal && selectedNote && <DeleteNoteModal
          show={showDeleteNoteModal}
          onClose={this.closeDeleteNoteModal}
          onConfirmDelete={this.handleDeleteNote}
          note={selectedNote} />}

        <Button onClick={() => this.openEditNoteModal()}>Add Note</Button>
        <ul className="notes-list">
          {notes.map((note) => {
            return (
              <li
                key={`${note.title}-${note.description}`}
                className="notes-list-item"
                onClick={() => this.openViewNoteModal(note)}>
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