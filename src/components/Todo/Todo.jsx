import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li onClick={ this.props.onClick }
        className="todo"
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: 'pointer'
          // this.props.completed ? 'default' :
        }}>
        { this.props.text }
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
