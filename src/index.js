import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import renderParticles from './particles.ts';

import App from './components/Main'

import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import 'styles/App.scss'

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('main'))

!!window.WebGLRenderingContext && renderParticles("#header");
