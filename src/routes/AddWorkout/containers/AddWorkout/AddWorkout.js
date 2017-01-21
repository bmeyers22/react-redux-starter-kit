import React from 'react'
import WorkoutForm from '../../components/WorkoutForm'
import './AddWorkout.scss'

export class AddWorkout extends React.Component {
  render() {
    return (
      <div className="add-workout-container">
        <WorkoutForm addWorkout={this.props.addWorkoutEntry.bind(this)} />
      </div>
    )
  }

}

export default AddWorkout
