import HomeView from './components/HomeView'
import Index from './routes/Index'
import AddWorkoutRoute from './routes/AddWorkout'

// Sync route definition
export default {
  component : HomeView,
  indexRoute  : Index,
  childRoutes : [
    Index,
    AddWorkoutRoute
  ]
}
