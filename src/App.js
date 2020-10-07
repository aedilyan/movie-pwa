import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddToHomeButton from './components/AddToHomeButton';
import Employees from './components/Employees';
import Location from './components/Location';
import Home from './components/Home';
import logo from './logo.svg';


function App() {


  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link> |
        <Link to="/actors">Actors</Link>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5>
            Movie PWA application
            </h5>
          <AddToHomeButton />
          <Location />

          <Switch>
            <Route path="/actors">
              <Employees />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </header>
      </div>
    </Router >
  );
}

export default App;


