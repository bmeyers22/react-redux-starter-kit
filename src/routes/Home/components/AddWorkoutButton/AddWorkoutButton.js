import React, { Component, PropTypes } from 'react'
import './AddWorkoutButton.scss'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentClear from 'material-ui/svg-icons/content/clear'

const style = {
  marginRight: 20
}

export default class AddWorkoutButton extends Component {
  static propTypes = {
    open : PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    toggleAddWorkout : PropTypes.func.isRequired
  }

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    if (this.props.open) {
      this.props.history.push('/')
    } else {
      this.props.history.push('/addWorkout')
    }
    this.props.toggleAddWorkout()
  }

  render () {
    let icon = <ContentAdd />
    if (this.props.open) {
      icon = <ContentClear />
    }
    return (
      <div className='home-add-button-container'>
        <FloatingActionButton secondary style={style} onClick={this.handleClick}>
          {icon}
        </FloatingActionButton>
      </div>
    )
  }
}
