// ------------------------------------
// Constants
// ------------------------------------
export const GET_WORKOUT = 'GET_WORKOUT'
export const ADD_WORKOUT_ENTRY = 'ADD_WORKOUT_ENTRY'

// ------------------------------------
// Actions
// ------------------------------------
export function getWorkout (user) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type    : GET_WORKOUT,
          payload: {
            workout: {
              id: 1,
              title: 'TEST'
            }
          }
        })
        resolve()
      })
    })
  }
}
export function addWorkoutEntry (value = null) {
  return {
    type: ADD_WORKOUT_ENTRY,
    payload: value
  }
}

export const actions = {
  getWorkout,
  addWorkoutEntry
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_WORKOUT] : (state, action) => {
    return Object.assign({}, state, {
      entities: {
        workouts: action.payload
      }
    })
  },
  [ADD_WORKOUT_ENTRY] : (state, action) => {
    return Object.assign({}, state, {
      100: {
        title: 'New Workout',
        id: 100
      }
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  2: {
    id: 2,
    title: 'intial workout'
  }
}
export default function workoutsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
