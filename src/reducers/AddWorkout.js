// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_NAV = 'TOGGLE_ADD_WORKOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleAddWorkout (value = null) {
  return {
    type    : TOGGLE_NAV,
    payload: value
  }
}

export const actions = {
  toggleAddWorkout
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_NAV] : (state, action) => {
    return {
      ...state,
      open: action.payload ? action.payload : !state.open
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  open: false
}
export default function sideNavReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
