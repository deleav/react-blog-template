import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li>
        <span  className={ this.props.completed ? 'completed' : 'todo' }
          onClick={ this.props.onClick }>
          { this.props.text }
        </span>
        <span className="close" onClick={ this.props.onDelete }></span>
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
