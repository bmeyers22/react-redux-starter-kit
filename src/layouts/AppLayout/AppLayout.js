import React from 'react'
import './AppLayout.scss'
import '../../styles/core.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export const AppLayout = ({ children }) => (
  <MuiThemeProvider>
    <div className='app-container'>
      {children}
    </div>
  </MuiThemeProvider>
)

AppLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default AppLayout
