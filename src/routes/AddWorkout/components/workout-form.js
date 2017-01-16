import React from 'react'
import './workout-form.scss'
import { Control, Form } from 'react-redux-form';
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import ContentClear from 'material-ui/svg-icons/content/clear'
import { IndexLink } from 'react-router'

class WorkoutForm extends React.Component {
  // Need to connect to Redux store
  // and dispatch action directly


  handleSubmit(val) {
    console.log('form submitted: ', val)
    this.props.addWorkoutEntry(val)
  }

  render() {
    return (
      <div className='workout-form'>
        <Form model='workout' onSubmit={(val) => this.handleSubmit(val)}>
          <Control.text
            model='workout.name'
            component={TextField}
            controlProps={{
              hintText: "Name your workout"
            }} />
          <div className="floating-action-container">
            <IndexLink to={`/`}>
              <FloatingActionButton className='action-button' secondary>
                <ContentClear />
              </FloatingActionButton>
            </IndexLink>
            <Control.button
              className='action-button'
              model='workout'
              component={FloatingActionButton}
              type='submit' />
          </div>
        </Form>
      </div>
    )
  }
}

export default WorkoutForm
