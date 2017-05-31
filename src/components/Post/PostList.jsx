import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import PostItem from './PostItem';

class PostList extends Component {
  render () {
    const { posts } = this.props;
    return (
      <div id="postList">
        {posts.map(( post, index ) =>
          <PostItem {...post}
            key={ index }
          ></PostItem>
        )}
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    posts: state.postAppReducer.posts
  };
}

export default connect( mapStateToProps )( PostList );
