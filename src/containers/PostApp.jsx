import React, { Component, PropTypes } from 'react';

// components
import PostList from '../components/Post/PostList';
import PostEditor from '../components/Post/PostEditor';

export default class PostApp extends Component {
  render() {
    return (
      <div id="postApp">
        <PostEditor></PostEditor>
        <PostList></PostList>
      </div>
    )
  }
}