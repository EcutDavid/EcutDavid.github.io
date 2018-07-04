import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/Main'

import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import 'styles/App.scss'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(function (error) {
      console.log('Service worker registration failed with ' + error);
    });
}

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'))
