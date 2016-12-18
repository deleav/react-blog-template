import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/TodoActions';
import AddTodo from '../components/Todo/AddTodo';
import TodoList from '../components/Todo/TodoList';

class App extends Component {
  render() {
    const { dispatch, todos } = this.props
    return (
      <div>
        <AddTodo onAddClick={text=>dispatch(addTodo(text))}/>
        <TodoList todos={todos} onTodoClick={index=>dispatch(toggleTodo(index))}/>
      </div>
    )
  }
}

export default connect( state => state )(App);
