import React, { PropTypes } from 'react'
import './WorkoutCard.scss'
import {Card, CardTitle, CardText} from 'material-ui/Card'

export default class WorkoutCard extends React.Component {
  static propTypes = {
    workout : PropTypes.object.isRequired
  }

  render () {
    const { title, id } = this.props.workout
    return (
      <div className="workout-card">
        <Card>
          <CardTitle title={title} subtitle={id} />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    )
  }
}
