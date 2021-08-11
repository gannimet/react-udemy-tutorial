import React from 'react';
import Fruits from '../Fruits';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About page</h1>
        <Fruits ownerName="Richard" />
      </div>
    )
  }
}

export default AboutPage;