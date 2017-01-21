import CoreLayout from 'layouts/CoreLayout'
import Home from '../Home'
import AddWorkoutRoute from '../AddWorkout'

// Sync route definition
export default {
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    AddWorkoutRoute
  ]
}
