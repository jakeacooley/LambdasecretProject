import React, { Component } from 'react';

import WeekList from './WeekList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda School Tracker</h1>
        <WeekList />
      </div>
    );
  }
}

export default App;
