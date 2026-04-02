import React, { Component } from 'react'

import Nav from 'components/Nav'
import Footer from 'components/Footer'
import About from 'components/About'

export default class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <About />
        <Footer />
      </div>
    )
  }
}
