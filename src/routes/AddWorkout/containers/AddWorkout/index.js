import AddWorkout from './AddWorkout'
import { connect } from 'react-redux'
import { addWorkoutEntry } from 'reducers/AddWorkout'

const mapDispatchToProps = {
  addWorkoutEntry
}

const mapStateToProps = function (state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkout)
