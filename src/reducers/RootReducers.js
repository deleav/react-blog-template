import { combineReducers } from 'redux';
import todoAppReducer from './TodoAppReducers';
import postAppReducer from './Post/PostAppReducers';

const rootReducer = combineReducers({
  todoAppReducer,
  postAppReducer
});

export default rootReducer;