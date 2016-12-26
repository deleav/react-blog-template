import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div className="addTodo">
        <input type='text' ref='todo' onKeyPress={e => this.handleKeyPress( e )} />
        <button onClick={(e) => this.handleClick(e)}>
          ADD
        </button>
      </div>
    )
  }

  add = () => {
    const todoNode = this.refs.todo
    const text = todoNode.value.trim()
    if ( text.length > 0 ) {
      this.props.onAddClick( text )
      todoNode.value = ''
    } // if
  }

  handleClick( e ) {
    this.add();
  }

  handleKeyPress( e ) {
    if ( e.key == 'Enter' )
      this.add();
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
