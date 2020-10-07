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



function App() {


  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link> | 
        <Link to="/actors">Actors</Link>
        <header className="App-header">
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


