import React from 'react'
import './AppLayout.scss'
import '../../styles/core.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginLayout from '../LoginLayout'
import Router from 'react-router'

// if not authenticated, render LoginLayout
// if authenticated, render CoreLayout
export class AppLayout extends React.Component {

  componentWillMount() {
    if (this.props.currentUser) {
      this.props.router.push('/app')
    } else {
      this.props.router.push('/')
    }
  }

  render() {
    const html = this.props.children;
    return (
      <MuiThemeProvider>
        <div className='app-container'>
          { html }
        </div>
      </MuiThemeProvider>
    )
  }

}

AppLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default AppLayout
