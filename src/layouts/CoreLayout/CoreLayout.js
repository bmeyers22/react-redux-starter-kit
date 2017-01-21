import React from 'react'
import SideNav from '../../components/SideNav'
import './CoreLayout.scss'
import '../../styles/core.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../components/Header'
import Router from 'react-router'

export class CoreLayout extends React.Component {
  componentWillMount() {
    // redirecting if not logged in
    if (!this.props.currentUser) {
      this.props.router.push('/')
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='core-container'>
          <Header />
          <div className='main-container'>
            {this.props.children}
          </div>
          <SideNav docked={false} open={false} />
        </div>
      </MuiThemeProvider>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
