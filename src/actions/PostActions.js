// action type
export const ADD_POST = "ADD_POST";

// action creator
export function addPost( ctx ) {
  return {
    type: ADD_POST,
    ctx
  }
}