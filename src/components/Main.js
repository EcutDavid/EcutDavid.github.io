import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import About from 'components/About'

export default class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    )
  }
}
