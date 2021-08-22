import React from 'react';
import CLI from './CLI';
import Safety from './Safety';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return(
  <Router>
    <div style={{margin: '.2em 25em 5em 25em'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', visibility: 'hidden'}}>
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/safety">Just the CV</Link>
      </nav>
      <Switch>
        <Route path="/safety">
          <Safety />
        </Route>
        <Route path="/">
          <CLI />
        </Route>
      </Switch>
    </div>
  </Router>)
}

export default App;
