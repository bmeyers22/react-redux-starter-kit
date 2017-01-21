import React, { PropTypes } from 'react'
import './WorkoutList.scss'
import WorkoutCard from '../../components/WorkoutCard'

class WorkoutList extends React.Component {
  static propTypes = {
    workouts : PropTypes.object.isRequired
  }

  render () {
    let workouts = Object.keys(this.props.workouts).map((id) => {
      const item = this.props.workouts[id]
      return (
        <WorkoutCard key={id} workout={item} />
      )
    })
    return (
      <div className="workout-list">
        {workouts}
      </div>
    )
  }
}

export default WorkoutList
