import React, { Component, PropTypes } from 'react'
import WorkoutForm from './workout-form'
import './AddWorkout.scss'

class AddWorkout extends Component {
  static propTypes = {
    addWorkoutEntry: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="add-workout-container">
        <WorkoutForm addWorkoutEntry={this.props.addWorkoutEntry} />
      </div>
    )
  }
}

export default AddWorkout
