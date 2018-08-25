import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/Main'

import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import 'styles/App.scss'

function toggleSnackBar() {
  const snackBar = document.querySelector('.snack-bar');
  setTimeout(() => {
    snackBar.style.display = 'block';
    // wait a while so the transition can be there.
    setTimeout(() => snackBar.style.opacity = 1, 200);
    setTimeout(() => {
      snackBar.style.opacity = 0;
      setTimeout(() => {
        snackBar.style.display = 'none';
      }, 1000);
    }, 10000)
  }, 3000);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(function (error) {
      // eslint-disable-next-line
      console.log('Service worker registration failed with ' + error);
    });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    navigator.serviceWorker.controller.addEventListener('statechange', event => {
      if (event.target.state) {
        const isActivated = event.target.state;
        if (isActivated) {
          toggleSnackBar();
        }
      }
    })
  })
}

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'))
