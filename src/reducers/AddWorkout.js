// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_NAV = 'TOGGLE_ADD_WORKOUT'
export const ADD_WORKOUT = 'ADD_WORKOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleAddWorkout (value = null) {
  return {
    type    : TOGGLE_NAV,
    payload: value
  }
}

export function addWorkoutEntry (value = null) {
  return {
    type: ADD_WORKOUT,
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
  },
  [ADD_WORKOUT] : (state, action) => {
    return {
      ...state,
      workouts: (state.workouts || []).concat(action.payload)
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  open: false
}

export default function addWorkoutReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
