import React, { Component } from 'react'
import 'normalize.css/normalize.css'

import Header from 'components/Header'
import Footer from 'components/Footer'
import About from 'components/About'
import BLogs from 'components/BLogs'
import 'styles/App.scss'

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content" />
        <About />
        <div className="content" />
        <BLogs />
        <div className="content" />
        <Footer />
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
