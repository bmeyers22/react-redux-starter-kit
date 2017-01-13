import React from 'react'
import SideNav from '../../components/SideNav'
import './CoreLayout.scss'
import '../../styles/core.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../components/Header'

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider>
    <div className='app-container'>
      <Header />
      <div className='main-container'>
        {children}
      </div>
      <SideNav docked={false} open={false} />
    </div>
  </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
