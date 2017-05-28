import React, { Component, propTypes } from 'react';

export default class PostEditor extends Component {
  render() {
    return (
      <div id="postEditor">
        <textarea rows="5" placeholder="Type something..."></textarea>
        <div className="postEditorBA">
          <div className="pull-right">
            <button className="btn btn-default">Cancel</button>
            <button className="btn btn-primary">Post</button>
          </div>
        </div>
      </div>
    )
  }
}