// ------------------------------------
// Constants
// ------------------------------------
export const OPEN_NAV = 'OPEN_SIDE_NAV'
export const CLOSE_NAV = 'CLOSE_SIDE_NAV'
export const TOGGLE_NAV = 'TOGGLE_SIDE_NAV'

// ------------------------------------
// Actions
// ------------------------------------
export function openNav () {
  return {
    type    : OPEN_NAV,
    payload : true
  }
}
export function closeNav () {
  return {
    type    : CLOSE_NAV,
    payload : false
  }
}
export function toggleNav () {
  return {
    type    : TOGGLE_NAV
  }
}

export const actions = {
  openNav,
  closeNav,
  toggleNav
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [OPEN_NAV]    : (state, action) => {
    return {
      ...state,
      open: true
    }
  },
  [CLOSE_NAV] : (state, action) => {
    return {
      ...state,
      open: false
    }
  },
  [TOGGLE_NAV] : (state, action) => {
    return {
      ...state,
      open: !state.open
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
