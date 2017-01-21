import AddWorkout from './AddWorkout'
import { connect } from 'react-redux'
import { addWorkoutEntry } from 'reducers/entities/Workouts'

const mapDispatchToProps = {
  addWorkoutEntry
}

const mapStateToProps = function (state) {
  return {
    workout: state.forms.workout
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkout)
