import React, { Component, PropTypes } from 'react'
import './SideNav.scss'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'

class SideNav extends Component {
  static propTypes = {
    open : PropTypes.bool.isRequired,
    closeNav : PropTypes.func.isRequired
  }

  render () {
    return (
      <Drawer
        open={this.props.open}
        docked={false}
        onRequestChange={this.props.closeNav}>
        <AppBar
          showMenuIconButton={false}
          title='LiftLog'
        />
      </Drawer>
    )
  }
}

export default SideNav
