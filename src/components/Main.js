import React, { Component } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import About from 'components/About'
import BLogs from 'components/BLogs'

export default class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <BLogs />
        <Footer />
      </div>
    )
  }
}
