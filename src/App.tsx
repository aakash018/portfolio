import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header'
import About from './pages/about'
import Home from './pages/home'
import Work from './pages/work'
import './scss/App.scss'

export const MobileNavState = createContext<any>(null)

function App() {
  
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <div className="App">
    <MobileNavState.Provider value={{showMobileNav, setShowMobileNav}}> 
      <Router>
      <Header />
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/work" component={Work} exact/>
            <Route path="/about" component={About} exact/>
        </Switch>
      </Router>
    </MobileNavState.Provider>
    </div>
  )
}

export default App
