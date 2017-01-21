import React from 'react'
import './WorkoutForm.scss'
import { Control, Form } from 'react-redux-form';
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import ContentClear from 'material-ui/svg-icons/content/clear'
import { IndexLink } from 'react-router'

class WorkoutForm extends React.Component {
  handleSubmit(evt) {
    this.props.addWorkout(this.props.workout)
  }

  render() {
    return (
      <div className='workout-form'>
        <Form model="workout" onSubmit={(val) => this.handleSubmit(val)}>
          <Control.text
            model="workout.title"
            component={TextField}
            controlProps={{
              hintText: "Name your workout"
            }} />
        </Form>
        <div className="floating-action-container">
          <IndexLink to={`/app`}>
            <FloatingActionButton className='action-button' secondary>
              <ContentClear />
            </FloatingActionButton>
          </IndexLink>
          <FloatingActionButton className='action-button' onClick={ (evt) => {this.handleSubmit(evt)} }>
            <ActionDone />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}

export default WorkoutForm
