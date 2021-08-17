import React from 'react';
import { Note } from '../../store/models/note';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';
import Textarea from '../Textarea';
import { NoteModalProps, NoteModalState } from './interface';
import './style.css';

class NoteModal extends React.Component<NoteModalProps, NoteModalState> {
  constructor(props: NoteModalProps) {
    super(props);

    this.state = {
      workingTitle: props.note?.title ?? '',
      workingDescription: props.note?.description ?? '',
    };
  }

  handleInputChange = (
    key: keyof NoteModalState,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      [key]: event.currentTarget.value,
    } as Pick<NoteModalState, keyof NoteModalState>)
  }

  handleSubmit = () => {
    this.props.onSave(new Note(this.state.workingTitle, this.state.workingDescription));
    this.resetState();
  }

  handleClose = () => {
    this.resetState();
    this.props.onClose();
  }

  private resetState() {
    this.setState({
      workingTitle: '',
      workingDescription: '',
    });
  }

  render() {
    const { show, note } = this.props;
    const { workingTitle, workingDescription } = this.state;
    const isEditMode = !!note;

    return (
      <Modal
        show={show}
        onClose={this.handleClose}
      >
        <h1>{isEditMode ? 'Edit' : 'Add'} Note</h1>

        <div className="form-field">
          <Input
            value={workingTitle}
            placeholder="Title"
            onChange={(event) => this.handleInputChange('workingTitle', event)} />
        </div>

        <div className="form-field">
          <Textarea
            placeholder="Description"
            value={workingDescription}
            onChange={(event) => this.handleInputChange('workingDescription', event)} />
        </div>

        <div className="button-row">
          <Button
            type="primary"
            disabled={workingTitle === '' || workingDescription === ''}
            onClick={this.handleSubmit}>Save Note</Button>
        </div>
      </Modal>
    )
  }
}

export default NoteModal;