// ./src/components/TodoForm.js

import React from 'react';
import TodoContext from '../contexts/TodoContext';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Set default `inputValue` state
    this.state = {
      inputValue: '',
    }
  }

  handleInputChange = (e) => {
    // TODO: Update `inputValue` state
    this.setState({inputValue: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Create a task based on the `inputValue`
    this.props.createTask(this.state.inputValue)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

const TodoFormWithContext = () => (
  // TODO: Use a Consumer component to wrap the TodoForm
  // TODO: Pass the `createTask` method stored in the context value as a prop to TodoForm
  <TodoContext.Consumer>
    {(value) => <TodoForm createTask={value.createTask} />}
  </TodoContext.Consumer>
);

export default TodoFormWithContext;
