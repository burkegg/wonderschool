import React, { Component } from 'react';
import { payload } from './data/data';
import List from './List';
import Default from './Default';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      view: 'default',
      data: [],
      lists: [],
    };
    this.countGroupTasks = this.countGroupTasks.bind(this);
    this.countGroupCompleted = this.countGroupCompleted.bind(this);
    this.handleGroupSelect = this.handleGroupSelect.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.taskIsUnlocked = this.taskIsUnlocked.bind(this);
  }

  componentDidMount() {
    // In practice, query the db to set initial state
    // In this coding challenge, I am using the provided hardcoded data.
    this.setState({ data: payload })
  }

  handleTaskClick(e, task) {
    // When a task is clicked:
    // check whether it is unlocked
    // if unlocked, update completedAt with date or null
    e.preventDefault();
    let { data } = this.state;
    let currentList = this.state.data;
    if (!this.taskIsUnlocked(task, currentList)) {
      return;
    }

    for (let idx = 0; idx < data.length; idx++) {
      if (data[idx].id === task) {
        if (data[idx].completedAt === null) {
          data[idx].completedAt = new Date();
          this.setState({ data: data });
          return;
        } else {
          data[idx].completedAt = null;
          this.setState({ data: data });
          return;
        }
      }
    }
  }

  taskIsUnlocked(taskId, taskList) {
    // Return true if task is unlocked
    // Return false if it is locked
    // Sure there's a nested for loop.
    taskList = taskList || this.state.data;
    let task = null;
    for (let idx = 0; idx < taskList.length; idx++) {
      if (taskList[idx].id === taskId) {
        task = taskList[idx];
      }
    }
    let dependentTaskIds = task.dependencyIds;
    if (dependentTaskIds.length === 0) {
      return true;
    }

    // Get a list of uncompleted dependent tasks
    let dependentTaskObjects = taskList.filter((task)=>{
      return ((dependentTaskIds.includes(task.id)) && (task.completedAt === null));
    })
    // for each id in the dependent IDs, see if any of them are unfinished
    for (let idx = 0; idx < dependentTaskIds.length; idx++) {
      let currentId = dependentTaskIds[idx];
      for (let j = 0; j < dependentTaskObjects.length; j++) {
        if (dependentTaskObjects[j].id === currentId) {
          return false;
        }
      }
    }
    return true;
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

  createMiniList(groupName) {
    const { data } = this.state;
    return data.filter( (item) => {
      return (item.group === groupName)
    });
  } 

  handleGroupSelect(e, value) {
    e.preventDefault();
    this.setState({ view: value })
  }

  render() {
    const { data, view } = this.state;
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
          handleGroupSelect={this.handleGroupSelect}
        />
      )
    }
    
    let miniList = this.createMiniList(view);
    return (
      <List
      handleTaskClick={this.handleTaskClick}
      miniList={miniList}
      name={'default'}
      handleGroupSelect={this.handleGroupSelect}
      taskIsUnlocked={this.taskIsUnlocked}
      />
    ) 
  }
} 

export default App;

