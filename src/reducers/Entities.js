import workoutsReducer from './entities/Workouts'
import { combineReducers } from 'redux'

export default () => {
  return combineReducers({
    workouts: workoutsReducer
  })
}
