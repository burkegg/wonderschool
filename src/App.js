import React, { Component } from 'react';
import { payload } from './data/data';
// import List from './List';
import Default from './Default';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      view: 'default',
      taskGroups: [],
      data: [],
    };
    this.countGroupTasks = this.countGroupTasks.bind(this);
    this.countGroupCompleted = this.countGroupCompleted.bind(this);
  }

  tasksToState(payload) {
    this.setState({ data: payload }, () => {console.log(this.state)});
  }

  componentDidMount() {
    this.tasksToState(payload);
  }

  countGroupTasks(groupName) {
    // Return the number of tasks for a group
    let count = 0;
    const { data } = this.state;
    for (let idx = 0; idx < data.length; idx++) {
      if (data[idx].group === groupName) {
        count += 1;
      }
    }
    return count;
  }

  countGroupCompleted(groupName) {
    // Return the number of completed tasks for a group
    let count = 0;
    const { data } = this.state;
    for (let idx = 0; idx < data.length; idx++) {
      if (data[idx].completedAt !== null) {
        count += 1;
      }
    }
    return count;
  }

  render() {
    const { data } = this.state;
    const { view } = this.state;

    if (!data) {
      return (
        <div>Add some tasks!</div>
      )
    }
    if (view === 'default') {
      return(
        <Default
          data={data}
          countGroupCompleted={this.countGroupCompleted}
          countGroupTasks={this.countGroupTasks}
        />
      )
    }   
  }
}

export default App;

