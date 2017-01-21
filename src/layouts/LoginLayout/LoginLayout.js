import React from 'react'
import './LoginLayout.scss'
import '../../styles/core.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import LoginForm from 'components/LoginForm'
import { Card, CardHeader, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class LoginLayout extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <div className='login-container'>
          <div className="login-header">
            <AppBar
              title="LiftLog"
            />
          </div>
          <div className="login-content">
            <Card className="login-card">
              <CardHeader
                title="Login"
              />
            <LoginForm className="login-form">

            </LoginForm>
            <CardActions>
              <FlatButton label="Login" />
            </CardActions>

            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default LoginLayout
