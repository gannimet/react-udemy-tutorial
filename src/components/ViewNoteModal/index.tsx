import React from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { ViewNoteModalProps } from './interface';

const ViewNoteModal: React.FC<ViewNoteModalProps> = ({
  note,
  show,
  onEditButtonClick,
  onClose,
}) => {
  return (
    <Modal
      show={show}
      onClose={onClose}>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <div className="button-row">
        <Button onClick={onEditButtonClick}>Edit this note</Button>
      </div>
    </Modal>
  )
};

export default ViewNoteModal;