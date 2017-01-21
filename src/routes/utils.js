import {pushState} from 'react-router'

export function getLoggedInUser (store) {
  return (nextState, replace) => {
    if (store.getState().currentUser) {

    } else {

    }
  }
}
