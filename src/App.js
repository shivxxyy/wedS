import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './components/Location'
import Home from './components/Home'
import WedS from './components/WedS'
import NorthDelhi from './components/NorthDelhi'
import SouthDelhi from './components/SouthDelhi'
import CentralDelhi from './components/CentralDelhi'
import EastDelhi from './components/EastDelhi'
import WestDelhi from './components/WestDelhi'
import Contact from './components/Contact'
import Error from './components/Error'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Location/>
    <Router>
    <Switch>
    <Route exact path='/'><WedS/></Route>
      <Route path='/Home'><Home/></Route>
      <Route path='/NorthDelhi'><NorthDelhi/></Route>
      <Route path='/SouthDelhi'><SouthDelhi/></Route>
      <Route path='/CentralDelhi'><CentralDelhi/></Route>
      <Route path='/EastDelhi'><EastDelhi/></Route>
      <Route path='/WestDelhi'><WestDelhi/></Route>
      <Route path='/Contact'><Contact/></Route>
      <Route path='*'><Error/></Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App
