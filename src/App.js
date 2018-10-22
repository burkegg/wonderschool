import React, { Component } from 'react';
import { payload } from './data/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    };
  }

  useHardcoded() {
    let groups = {};
    // make a dict of all groups as:  { group: [items] }
    for (let idx = 0; idx < payload.length; idx++) {
      let name = payload[idx].group;
      if (!groups[payload[idx].group]) {
        groups[name] = [payload[idx]];
      } else {
        groups[name] = groups[name].concat(payload[idx])
      }
    }
    this.setState({ taskLists: groups }, () => {console.log(this.state)});
  }

  componentDidMount() {
    this.useHardcoded();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;

