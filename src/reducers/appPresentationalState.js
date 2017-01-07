import sideNavReducer from '../reducers/SideNav'
import addWorkoutReducer from '../reducers/AddWorkout'
import { combineReducers } from 'redux'

export default () => {
  return combineReducers({
    sideNav: sideNavReducer,
    addWorkout: addWorkoutReducer
  })
}
