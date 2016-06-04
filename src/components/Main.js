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
        <About />
        <BLogs />
        <Footer />
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
