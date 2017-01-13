import React from 'react'
import './HomeView.scss'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Link } from 'react-router'

export const HomeView = () => (
  <div className='home-index-container'>
    <h4>Welcome!</h4>
    <RaisedButton label='Default' />
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
