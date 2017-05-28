import { combineReducers } from 'redux';
import todoAppReducer from './TodoAppReducers';

const rootReducer = combineReducers({
  todoAppReducer
});

export default rootReducer;