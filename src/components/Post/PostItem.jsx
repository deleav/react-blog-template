import React, { Component, propTypes } from 'react';

export default class PostItem extends Component {
  render() {
    return (
      <div className="postItem">
        <a href="#" className="postTitle"> Test Title </a>
        <div className="postImg"></div>
        <div className="postContent">Hey</div>
      </div>
    )
  }
}