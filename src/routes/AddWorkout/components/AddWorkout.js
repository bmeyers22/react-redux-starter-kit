import React, { Component, PropTypes } from 'react'
import './AddWorkout.scss'
import { Control, Form } from 'react-redux-form';
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ActionDone from 'material-ui/svg-icons/action/done'
import ContentClear from 'material-ui/svg-icons/content/clear'
import { IndexLink } from 'react-router'

class AddWorkout extends Component {
  static propTypes = {
    addWorkoutEntry: PropTypes.func.isRequired
  }

  handleSubmit(val) {
    this.props.addWorkoutEntry(val)
  }

  render() {
    return (
      <div className='add-workout-container'>
        <div className='workout-form'>
          <Form model='workout' onSubmit={ (val) => handleSubmit(val) }>
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
      </div>
    )
  }
}

export default AddWorkout
