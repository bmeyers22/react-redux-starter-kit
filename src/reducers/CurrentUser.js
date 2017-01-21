// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_USER = 'LOGIN_USER'

// ------------------------------------
// Actions
// ------------------------------------
export function loginUser (user) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type    : LOGIN_USER,
          payload: {
            userName: user.userName,
            password: user.password
          }
        })
        resolve()
      })
    })
  }
}

export const actions = {
  loginUser
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_USER] : (state, action) => {
    return {
      ...state,
      currentUser: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  currentUser: {}
}
export default function currentUserReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
