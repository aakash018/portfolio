import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/home'
import Work from './pages/work'
import './scss/App.scss'


function App() {

  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/work" component={Work} exact/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
