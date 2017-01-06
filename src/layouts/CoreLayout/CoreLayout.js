import React from 'react'
import SideNav from '../../components/SideNav'
import './CoreLayout.scss'
import '../../styles/core.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export const CoreLayout = ({ children }) => (
    <MuiThemeProvider>
        <div className="app-container">
          <AppBar
            title="LiftLog"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          {children}
          <SideNav docked={true} open={true}></SideNav>
        </div>
    </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
