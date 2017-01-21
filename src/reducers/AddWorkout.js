// ------------------------------------
// Constants
// ------------------------------------
const TOGGLE_NAV = 'TOGGLE_ADD_WORKOUT'
const ADD_WORKOUT_ENTRY = 'ADD_WORKOUT_ENTRY'

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
    type: ADD_WORKOUT_ENTRY,
    payload: value
  }
}

export const actions = {
  toggleAddWorkout,
  addWorkoutEntry
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
  [ADD_WORKOUT_ENTRY] : (state, action) => {
    return {
      ...state,
      workouts: (state.workouts || []).concat([{ name: 'New Workout' }]) // TODO: Grab from form
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  open: false
}
export default function addWorkoutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
