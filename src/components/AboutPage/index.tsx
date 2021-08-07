import React from 'react';
import { AboutPageProps } from './interface';

class AboutPage extends React.Component<AboutPageProps> {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Name: {this.props.match.params.username}</p>
      </div>
    )
  }
}

export default AboutPage;