import { combineReducers } from 'redux';
import { todos } from './TodoReducers';

const todoApp = combineReducers({
  todos
});

export default todoApp;
