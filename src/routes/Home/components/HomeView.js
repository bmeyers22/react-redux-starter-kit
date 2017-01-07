import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import RaisedButton from 'material-ui/RaisedButton'
import AddWorkoutButton from './AddWorkoutButton'

export const HomeView = () => (
  <div className="home-container">
    <h4>Welcome!</h4>
    <RaisedButton label="Default" />
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
    <AddWorkoutButton />
  </div>
)

export default HomeView
