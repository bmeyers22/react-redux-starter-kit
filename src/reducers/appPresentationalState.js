import sideNavReducer from './SideNav'
import addWorkoutReducer from './AddWorkout'
import { combineReducers } from 'redux'

export default () => {
  return combineReducers({
    sideNav: sideNavReducer
  })
}
