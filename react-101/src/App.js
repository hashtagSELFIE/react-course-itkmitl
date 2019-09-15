import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage}/>
        <Route path="/users" component={UsersPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
