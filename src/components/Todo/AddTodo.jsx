import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='todo' />
        <button onClick={(e) => this.handleClick(e)}>
          ADD
        </button>
      </div>
    )
  }

  handleClick(e) {
    const todoNode = this.refs.todo
    const text = todoNode.value.trim()
    if ( text.length > 0 ) {
      this.props.onAddClick( text )
      todoNode.value = ''
    } // if
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
