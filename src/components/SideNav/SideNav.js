import React, { Component, PropTypes } from 'react'
import './SideNav.scss'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'

class SideNav extends Component {
  static propTypes = {
    open : PropTypes.bool.isRequired,
    docked : PropTypes.bool.isRequired
  }

  render () {
    return (
      <Drawer docked={this.props.docked}>
        <AppBar
          showMenuIconButton={false}
          title='LiftLog'
        />
      </Drawer>
    )
  }
}

export default SideNav
