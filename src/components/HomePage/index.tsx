import React from 'react';
import { HomePageProps, HomePageState } from './interface';

const EvenComponent = React.lazy(() => import('../EvenComponent'));
const OddComponent = React.lazy(() => import('../OddComponent'));

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);

    this.state = {
      counter: 0,
      hasError: false,
    };
  }

  updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };

  static getDerivedStateFromError(): Partial<HomePageState> {
    return {
      hasError: true,
    }
  }

  render() {
    const { counter, hasError } = this.state;

    return (
      <div>
        <h1>Home Page</h1>
        {hasError ? <h2>Error occured</h2> : <React.Suspense fallback={<div>Loading …</div>}>
          {counter % 2 === 0 ? <EvenComponent /> : <OddComponent />}
        </React.Suspense>}
        <button onClick={this.updateCounter}>Change Component</button>
      </div>
    )
  }
}

export default HomePage;