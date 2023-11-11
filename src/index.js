import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Settings from './views/settings'
import Account from './views/account'
import Upload from './views/upload'
import Register from './views/register'
import Login1 from './views/login1'
import Home from './views/home'
import Page from './views/page'
import Login2 from './views/login2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Settings} exact path="/settings" />
        <Route component={Account} exact path="/account" />
        <Route component={Upload} exact path="/upload" />
        <Route component={Register} exact path="/register" />
        <Route component={Login1} exact path="/login1" />
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
        <Route component={Login2} exact path="/login2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
