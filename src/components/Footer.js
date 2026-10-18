import React, { Component } from 'react'

import { CONTACT_ME } from 'constants/domID'
import 'styles/Footer.css'


export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer" id={CONTACT_ME}>
        <div className="footer-links">
          <a
            className='footer-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/david-guan/'
          >
            LinkedIn (david-guan)
          </a>
          <span className="footer-separator">/</span>
          <a
            className='footer-link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/EcutDavid'
          >
            Github (EcutDavid)
          </a>
          <span className="footer-separator">/</span>
          <a
            aria-label="Send a email to David"
            className="footer-link"
            href="mailto:davidguandev@gmail.com"
          >
            davidguandev@gmail.com
          </a>
        </div>
      </footer>
    )
  }
}
