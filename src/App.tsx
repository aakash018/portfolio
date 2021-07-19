import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/home'
import './scss/App.scss'


function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
