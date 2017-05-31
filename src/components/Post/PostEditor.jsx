import React, { Component, propTypes } from 'react';
import { addPost } from '../../actions/PostActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PostEditor extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      title: '',
      content: '',
      valid: true
    }
  }

  render() {
    return (
      <div id="postEditor">
        <input id="postET" type="text" placeholder="Title" value={ this.state.title } onChange={ e => this.setState({ title: e.target.value }) }/>
        <textarea rows="5" placeholder="Type something..." value={ this.state.content } onChange={ e => this.setState({ content: e.target.value }) }></textarea>
        <div className="postEditorBA">
          { this.state.valid ? '' : <span className="error">Please fill the field!</span> }
          <div className="pull-right">
            <button className="btn btn-default" onClick={ this.cancelPost }>Cancel</button>
            <button className="btn btn-primary" onClick={ this.addPost }>Post</button>
          </div>
        </div>
      </div>
    )
  }

  cancelPost = () => {
    this.setState({
      title: '',
      content: ''
    });
  }

  addPost = () => {
    if ( !this.isValid() )
      this.setState({ valid: false });
    else {
      this.setState({ valid: true });
      this.props.addPost( this.state );
      this.cancelPost();
    }
  }

  isValid() {
    return this.state.title.trim().length > 0 && this.state.content.trim().length > 0;
  }

  // componentDidUpdate() {
  //   console.log( this.hasInputValid() );
  //   // this.setState({
  //   //   valid: this.hasInputValid()
  //   // });
  // }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ addPost }, dispatch);
}

export default connect( null, mapDispatchToProps )( PostEditor );