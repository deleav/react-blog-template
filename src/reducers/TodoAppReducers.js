import { combineReducers } from 'redux';
import { todos } from './TodoReducers';
import { visibilityFilter } from './VisibilityFilterReducers';

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoAppReducer;
