import React from 'react'
import './HomeView.scss'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Link } from 'react-router'
import WorkoutList from '../containers/WorkoutList'

export const HomeView = () => (
  <div className='home-index-container'>
    <WorkoutList />
    <div className="floating-action-container">
      <Link to={`/addWorkout`}>
        <FloatingActionButton secondary>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  </div>
)

export default HomeView
