import { combineReducers } from 'redux';
import { todos } from './TodoReducers';
import { visibilityFilter } from './VisibilityFilterReducers';

const todoAppReducer = combineReducers({
  visibilityFilter,
  todos
});

export default todoAppReducer;
