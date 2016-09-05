/* main.js */

'use strict';

import React from 'react';
import { render } from 'react-dom';
import TestOne from './components/TestOne';
import TestTwo from './components/TestTwo';

class Main extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      switch: true
    }
  }
  _toggle = () => {
    this.setState({
      switch: !this.state.switch
    });
  }
  render() {
    return (
      <div>
        <input type="button" onClick={this._toggle} value="Press Me!"/>
        {this.state.switch ? <TestOne /> : <TestTwo />}
      </div>
    );
  }
}

render(<Main />, document.getElementById('mountNode'));
