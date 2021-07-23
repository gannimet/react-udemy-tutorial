import React from 'react';
import { withTrackClickProps, withTrackClickState, WrapperComponentProps } from './interface';

export const withTrackClick = <T extends unknown>(WrapperComponent: React.FC<WrapperComponentProps & T>) => {
  return class extends React.Component<withTrackClickProps & T, withTrackClickState> {
    constructor(props: withTrackClickProps & T) {
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
      return (
        <div onClick={this.handleClick}>
          <WrapperComponent {...this.props} clicks={this.state.clicks} />
        </div>
      )
    }
  }
}