import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }


  function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Movie PWA application
        </p>
      </header>
    </div>
  );
}

export default App;
