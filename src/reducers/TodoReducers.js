import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/TodoActions";

export function todos( state = [], action ) {
  switch( action.type ) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case DELETE_TODO:
      let nextState = [...state];
      nextState.splice(action.index, 1);
      return nextState;
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index)
          return {
            ...todo, completed: !todo.completed
          }

        return todo
      });
    default:
      return state;
  }
}
