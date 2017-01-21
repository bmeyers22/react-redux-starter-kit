import CoreLayout from 'layouts/CoreLayout'
import Home from '../Home'
import AddWorkoutRoute from '../AddWorkout'

// Sync route definition
export const createRoutes = {
  path        : '/app',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    AddWorkoutRoute
  ]
}

export default createRoutes
