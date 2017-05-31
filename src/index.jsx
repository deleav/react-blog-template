/* main.js */
'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PostApp from './containers/PostApp';
// import App from './containers/App';
import rootReducers from './reducers/RootReducers';

let rootElement = document.getElementById('mountNode');
let store = createStore( rootReducers, window.devToolsExtension ? window.devToolsExtension() : undefined );

render(
  <Provider store={store}>
    <PostApp />
  </Provider>,
  rootElement
);
