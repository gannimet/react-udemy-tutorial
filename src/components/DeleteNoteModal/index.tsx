import React from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { DeleteNoteModalProps } from './interface';
import './style.css';

const DeleteNoteModal: React.FC<DeleteNoteModalProps> = ({
  note, onConfirmDelete, onClose, show
}) => {
  return (
    <Modal
      show={show}
      onClose={onClose}>
      <h1>Delete Note</h1>

      <p>
        Are you sure you want to delete the note titled
        '{note.title}'?
      </p>

      <div className="button-row">
        <Button type="secondary" onClick={onClose}>Cancel</Button>
        <Button type="primary" onClick={() => onConfirmDelete(note)}>Delete</Button>
      </div>
    </Modal>
  )
};

export default DeleteNoteModal;