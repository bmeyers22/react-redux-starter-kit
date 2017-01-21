import { combineReducers } from 'redux'
import locationReducer from './location'
import appPresentationalReducer from '../reducers/AppPresentationalState'
import currentUserReducer from '../reducers/CurrentUser'
import formsReducer from '../reducers/forms'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    appPresentational: appPresentationalReducer(),
    forms: formsReducer(),
    currentUser: currentUserReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
