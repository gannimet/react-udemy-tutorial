import React from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './interface';
import './style.css';

class Modal extends React.Component<ModalProps> {
  root: HTMLElement;
  el: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);

    this.root = document.getElementById('root')!;
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.root.append(this.el);
  }

  componentWillUnmount() {
    this.root.removeChild(this.el);
  }

  handleClose = () => {
    this.props.onClose();
  }

  stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  }

  render() {
    const { show, onClose, children } = this.props;
    const modalUI = createPortal(
      <div className="modal-container" onClick={this.stopPropagation}>
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal-body">{ children }</div>
      </div>,
      this.el,
    );

    return show ? modalUI : null;
  }
}

export default Modal;