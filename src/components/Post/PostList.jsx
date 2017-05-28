import React, { Component, PropTypes } from 'react';

// components
import PostItem from './PostItem';

export default class PostList extends Component {
  render () {
    return (
      <div id="postList">
        <PostItem></PostItem>
      </div>
    )
  }
}