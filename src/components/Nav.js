import React, { Component } from 'react'

import { ABOUT_ME, MY_WORKS, ARTICLES, CONTACT_ME } from 'constants/domID'
import 'styles/Nav.css'

const NAV_LINKS = [
  { label: 'About', id: ABOUT_ME },
  { label: 'Projects', id: MY_WORKS },
  { label: 'Articles', id: ARTICLES },
  { label: 'Contact', id: CONTACT_ME }
]

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.toggle = this.toggle.bind(this)
    this.navigate = this.navigate.bind(this)
  }

  toggle() {
    this.setState(prev => ({ open: !prev.open }))
  }

  navigate(id) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <nav className="Nav" aria-label="Main navigation">
        <div className="nav-bar">
          <ul className="nav-links">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button type="button" onClick={() => this.navigate(id)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="hamburger"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={this.toggle}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
        {open && (
          <ul className="mobile-menu">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button type="button" onClick={() => this.navigate(id)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    )
  }
}
