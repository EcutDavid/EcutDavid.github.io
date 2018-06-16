import React, { Component } from 'react'
import renderParticles from '../particles.ts';

import 'styles/Header.scss'

// TODO: a navigation bar for mobile devices
const hasWebGL = !!window.WebGLRenderingContext;

class Header extends Component {
  componentDidMount() {
    hasWebGL && renderParticles('#header');
  }

  componentWillUnmount() {
    ['onclick', 'click']
      .forEach(e => document.removeEventListener(e, this.onDefocus, false))
  }

  render() {
    return (
      <div className={`Header ${hasWebGL ? '' : 'withoutWebGL'}`} id='header' />
    )
  }
}
export default Header
