import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ol className="todoList">
        {this.props.todos.map((todo, index) =>
          <TodoItem {...todo}
                key={index}
                onClick={ () => this.props.onTodoClick( todo.index ) }
                onDelete={ () => this.props.onDeleteClick( todo.index ) }
          />
        )}
      </ol>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
