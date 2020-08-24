// ./src/AppWithContext.js

import React from 'react';
// TODO: Import TodoContext
// TODO: Import App
import TodoContext from './contexts/TodoContext';
import App from './App';

class AppWithContext extends React.Component {
  constructor() {
    super();
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    // TODO: Set up default state (tasks, createTask, deleteTask)
    this.state = {
      tasks: storedTasks ? storedTasks : {},
      createTask: this.createTask,
      deleteTask: this.deleteTask,
    }
  }

  createTask = (task) => {
    // TODO: Use the built-in Date `getTime` method to generate the `nextTaskId` for the `newTask`
    const nextTaskId = new Date().getTime();
    // TODO: Generate a `newTask` object, structured with proper "state shape"
    const newTask = {
      [nextTaskId]: {
        id: nextTaskId,
        message: task,
      },
    };
    // TODO: Update the `tasks` state
    // TODO: Invoke the `updateLocalStorageTasks` method
    this.setState((state, props) => ({
      tasks: { ...state.tasks, ...newTask },
    }), () => this.updateLocalStorageTasks());
  }

  deleteTask = (id) => {
    // TODO: Delete the task based on the task `id`
    // TODO: Update the `tasks` state
    // TODO: Invoke the `updateLocalStorageTasks` method
    this.setState((state, props) => {
      const tasksWithDeletion = { ...state.tasks };
      delete tasksWithDeletion[id];
      return {
        tasks: tasksWithDeletion,
      };
    }, () => this.updateLocalStorageTasks());
  }

  updateLocalStorageTasks = () => {
    console.log(this.state.tasks);
    const jsonTasks = JSON.stringify(this.state.tasks);
    localStorage.setItem('tasks', jsonTasks);
  }

  render() {
    return (
      // TODO: Use a Provider component to wrap the App component
      // TODO: Use the AppWithContext state as the Provider component's `value`
      <TodoContext.Provider value={this.state}>
        <App tasks={this.state.tasks} />
      </TodoContext.Provider>
    );
  }
}

export default AppWithContext;
