import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li onClick={ this.props.onClick }
        className="todo"
        style={{
          boxShadow: this.props.completed ? 'none' : '3px 3px 5px grey',
          borderColor: this.props.completed ? 'green' : 'lightgrey',
          cursor: 'pointer'
          // this.props.completed ? 'default' :
        }}>
        { this.props.text }
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
