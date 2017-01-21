import React from 'react'
import './HomeView.scss'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Link } from 'react-router'
import WorkoutList from '../containers/WorkoutList'

export class HomeView extends React.Component {

  render() {
    return (
      <div className='home-index-container'>
        <WorkoutList />
        <div className="floating-action-container">
          <Link to={`/app/add-workout`}>
            <FloatingActionButton secondary>
              <ContentAdd />
            </FloatingActionButton>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeView
