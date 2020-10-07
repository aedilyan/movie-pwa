import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }


  function showPosition(position) {
    alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude)
  }

  useEffect(() => {
    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    addBtn && (addBtn.style.display = 'none');

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';

      addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
      });
    });
  })



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Movie PWA application
        </p>
        <button className="add-button">Add to home screen</button>
      </header>
    </div>
  );
}

export default App;
