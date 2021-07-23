import React from 'react';

export interface TrackClickProps {
  renderProps(clicks: number): React.ReactElement;
}

export interface TrackClickState {
  clicks: number;
}