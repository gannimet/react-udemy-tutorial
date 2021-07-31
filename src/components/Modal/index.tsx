import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { ModalProps, ModalState } from './interface';
import './style.css';

class Modal extends React.Component<ModalProps, ModalState> {
  root: HTMLElement | null;
  el: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);

    this.state = {
      weekdayName: [
        'Sunday',
        'Moday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Firday',
        'Saturday',
      ][new Date().getDay()],
    }

    this.root = document.getElementById('root');
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.root?.append(this.el);
  }

  componentWillUnmount() {
    this.root?.removeChild(this.el);
  }

  modalStopEventPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
  }

  render() {
    const { show = true, onClose = () => {} } = this.props;
    const { weekdayName } = this.state;

    const modalUi = ReactDOM.createPortal(
      <div className="modal-container" onClick={this.modalStopEventPropagation}>
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal-body">
          <h3>Today is {weekdayName}</h3>
          <p>Enjoy the day with your family.</p>
          <Button onClick={onClose}>Close modal</Button>
        </div>
      </div>,
      this.el
    );

    return show ? modalUi : null;
  }
}

export default Modal;