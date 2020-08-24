// ./src/components/TodoList.js

import React from 'react';
import Task from './Task';
// TODO: Import context
import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {
  // TODO: Access context
  static contextType = TodoContext;

  render() {
    return (
      <ul>
        {Object.values(this.context.tasks).map(task => <Task key={task.id} deleteTask={this.context.deleteTask} task={task}></Task>)}
      </ul>
    );
  }
}

export default TodoList;
