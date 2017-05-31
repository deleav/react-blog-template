import React, { Component, propTypes } from 'react';

export default class PostItem extends Component {
  render() {
    return (
      <div className="postItem">
        <a href="#" className="postTitle">{ this.props.title }</a>
        {/*<div className="postImg"></div>*/}
        <div className="postContent" dangerouslySetInnerHTML={{__html: this.props.content.replace(/\n/g, '<br/>')}}></div>
        <div className="pull-right">see more...</div>
      </div>
    )
  }
}