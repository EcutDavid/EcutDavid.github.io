import React, { Component } from 'react'

import 'styles/Header.scss'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className='mask-layer' />
        <div className='avatar-area'>
          <figure className='avatar' />
          <p className='name'>David Guan</p>
          <p className='description'>Web developer</p>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
}

export default Header
