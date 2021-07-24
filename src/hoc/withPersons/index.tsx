import axios from 'axios';
import React from 'react';
import { WithPersonsProps, WithPersonsState, WrappedComponentProps } from './interface';

export const withPersons = <T extends unknown>(WrappedComponent: React.FC<WrappedComponentProps & T>) => {
  return class extends React.Component<WithPersonsProps & T, WithPersonsState> {
    constructor(props: WithPersonsProps & T) {
      super(props);

      this.state = {
        persons: []
      };
    }

    componentDidMount() {
      axios.get('https://reqres.in/api/users?page=2').then((response) => {
        this.setState({
          persons: response.data.data,
        })
      })
    }

    render() {
      return (
        <WrappedComponent {...this.props} persons={this.state.persons} />
      )
    }
  }
};