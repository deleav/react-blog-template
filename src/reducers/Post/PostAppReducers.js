import { combineReducers } from 'redux';

import { posts } from './PostReducers';

const postAppReducer = combineReducers({
  posts
});

export default postAppReducer;