import React from 'react';
import Button from '../Button';
import Modal from '../Modal';
import { MessageSenderProps, MessageSenderState } from './interface';

class MessageSender extends React.Component<MessageSenderProps, MessageSenderState> {
  constructor(props: MessageSenderProps) {
    super(props);

    this.state = {
      isShowingModal: false,
    };
  }

  handleModalClose = () => {
    this.setState({
      isShowingModal: false,
    })
  }

  handleButtonClick = () => {
    this.setState({
      isShowingModal: true,
    })
  }

  render() {
    const { isShowingModal } = this.state;

    return (
      <>
        <h1>Send a message to yourself!</h1>
        <Button type="primary" onClick={this.handleButtonClick}>Send message</Button>
        <Modal show={isShowingModal} onClose={this.handleModalClose} />
      </>
    )
  }
}

export default MessageSender;