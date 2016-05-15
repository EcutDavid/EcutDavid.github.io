import React, { Component } from 'react'

import 'styles/Header.scss'

class Header extends Component {
  constructor() {
    super()
    this.onDefocus = this.onDefocus.bind(this)
  }

  onDefocus(event) {
    if (event.target.className !== this.refs.navMenuBtn.className) {
      this.refs.navMenuDropdown.style.display = 'none'
    }
  }

  componentDidMount() {
    ['onclick', 'click']
      .forEach(e => document.addEventListener(e, this.onDefocus, false))
  }

  componentWillUnmount() {
    ['onclick', 'click']
      .forEach(e => document.removeEventListener(e, this.onDefocus, false))
  }

  onNavMenuBtnClick() {
    const style = this.refs.navMenuDropdown.style
    style.display = style.display === 'block' ? 'none' : 'block'
  }

  render() {
    return (
      <div className="Header">
        <div className='mask-layer' />
        <div className='dropdown-area'>
          <i
            aria-hidden={true}
            className='nav-menu-btn fa fa-bars'
            onClick={this.onNavMenuBtnClick.bind(this)}
            ref='navMenuBtn'
          />
          <div
            className='nav-menu-dropdown'
            ref='navMenuDropdown'
          >
            <span>ABOUT ME</span>
            <span>BLOGS</span>
            <span>PUBLIC SPEECH</span>
            <span>CONTACT ME</span>
          </div>
        </div>
        <div className='avatar-area'>
          <figure className='avatar' />
          <p className='name'>David Guan</p>
          <p className='description'>Web developer</p>
        </div>
        <div className='nav-bar'>
          <span>ABOUT ME</span>
          <span>BLOGS</span>
          <span>PUBLIC SPEECH</span>
          <span>CONTACT ME</span>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
}

export default Header
