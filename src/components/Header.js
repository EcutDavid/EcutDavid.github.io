import React, { Component } from 'react'
import { pageScrollTopAnimate } from 'html-utilities'
import renderParticles from '../particles.ts';

import {
  MY_WORKS,
  CONTACT_ME
} from 'constants/domID'
import 'styles/Header.scss'

const hasWebGL = !!window.WebGLRenderingContext;

class Header extends Component {
  constructor() {
    super()
    this.onDefocus = this.onDefocus.bind(this)
  }

  onDefocus(event) {
    if (!hasWebGL && event.target.className !== this.refs.navMenuBtn.className) {
      this.refs.navMenuDropdown.style.display = 'none'
    }
  }

  componentDidMount() {
    ['onclick', 'click']
      .forEach(e => document.addEventListener(e, this.onDefocus, false))

    hasWebGL && renderParticles('#header');
  }

  componentWillUnmount() {
    ['onclick', 'click']
      .forEach(e => document.removeEventListener(e, this.onDefocus, false))
  }

  onNavMenuBtnClick() {
    const style = this.refs.navMenuDropdown.style
    style.display = style.display === 'block' ? 'none' : 'block'
  }

  onLinkClick(id) {
    const dom = document.querySelector(`#${id}`)
    const scrollTimeMS = 500
    pageScrollTopAnimate(dom.offsetTop, scrollTimeMS)
  }

  render() {
    return (
      <div className={`Header ${hasWebGL ? '' : 'withoutWebGL'}`} id='header'>
        {
          !hasWebGL && (
            <div>
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
                  <span onClick={this.onLinkClick.bind(this, MY_WORKS)}>MY WORKS</span>
                  <span onClick={this.onLinkClick.bind(this, CONTACT_ME)}>CONTACT</span>
                </div>
              </div>
              <div className='avatar-area'>
                <figure className='avatar' />
                <h1 className='name'>David Guan</h1>
                <p className='description'>Software Engineer</p>
              </div>
              <div className='nav-bar'>
                <span onClick={this.onLinkClick.bind(this, MY_WORKS)}>MY WORKS</span>
                <span onClick={this.onLinkClick.bind(this, CONTACT_ME)}>CONTACT</span>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

Header.defaultProps = {
}

export default Header
