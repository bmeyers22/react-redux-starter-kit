import React from 'react'
import './HomeView.scss'
import AddWorkoutButton from './AddWorkoutButton'

export const HomeView = ({ children }) => (
  <div className='home-container'>
    {children}
    <AddWorkoutButton />
  </div>
)

HomeView.propTypes = {
  children : React.PropTypes.element
}

export default HomeView
