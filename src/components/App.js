import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };

  componentDidMount() {
    //ajax, timers, listeners
  }

  componentWillUnmount() {
    //clean timers or listeners so they don't leak out
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
