import React, { Component, PropTypes } from 'react'
import './Header.scss'
import AppBar from 'material-ui/AppBar'

export default class Header extends React.Component {
  static propTypes = {
    open : PropTypes.bool.isRequired,
    openNav : PropTypes.func.isRequired
  }

  render () {
    return (
      <AppBar
        title='LiftLog'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
        onLeftIconButtonTouchTap={this.props.openNav}
      />
    )
  }
}
