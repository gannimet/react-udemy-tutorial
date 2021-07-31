import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps, ModalState } from './interface';
import './style.css';

class Modal extends React.Component<ModalProps, ModalState> {
  root: HTMLElement | null;
  el: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);

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
    const modalUi = ReactDOM.createPortal(
      <div className="modal-container" onClick={this.modalStopEventPropagation}>
        <div className="modal-overlay" />
        <div className="modal-body">
          <h3>Modal</h3>
          <button className="modal-button" onClick={onClose}>Close modal</button>
        </div>
      </div>,
      this.el
    );

    return show ? modalUi : null;
  }
}

export default Modal;