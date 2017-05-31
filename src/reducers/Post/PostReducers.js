import { ADD_POST } from '../../actions/PostActions';

export function posts( state = [], action ) {
  switch( action.type ) {
    case ADD_POST:
      return [
        action.ctx,
        ...state
      ];
    default:
      return state;
  }
}