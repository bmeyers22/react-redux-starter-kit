import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './AddWorkout.scss'

export const HomeView = () => (
  <div className="home-add-workout-container">
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeView
