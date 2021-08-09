import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class UserDetails extends React.Component<RouteComponentProps> {
  render() {
    return (
      <h1>User Details</h1>
    )
  }
}

export default withRouter(UserDetails);