// action type
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

// const
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action creator
export function setVisibilityFilter( filter ) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
