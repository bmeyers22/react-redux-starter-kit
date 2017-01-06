import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import './SideNav.scss'
import Drawer from 'material-ui/Drawer';

class SideNav extends Component {
  static propTypes = {
    open : PropTypes.bool.isRequired,
    docked : PropTypes.bool.isRequired
  }

  render () {
    return (
      <Drawer docked={this.props.docked}>
      </Drawer>
    )
  }
}

export default SideNav
