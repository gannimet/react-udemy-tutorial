import React from 'react';
import { TrackClickProps, TrackClickState } from './interface';

class TrackClick extends React.PureComponent<TrackClickProps, TrackClickState> {
  constructor(props: TrackClickProps) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render() {
    const { renderProps } = this.props;

    return (
      <div onClick={this.handleClick}>
        {renderProps(this.state.clicks)}
      </div>
    )
  }
}

export default TrackClick;