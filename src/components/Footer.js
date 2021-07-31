import React, { Component } from 'react'

import { CONTACT_ME } from 'constants/domID'
import 'styles/Footer.css'


export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer" id={CONTACT_ME}>
        <a
          aria-label="David's linkedin profile"
          className='footer-link'
          target='_blank'
          href='https://www.linkedin.com/in/david-guan/'
        >
          <i className='fa fa-linkedin-square' />
        </a>
        <a
          aria-label="David's twitter profile"
          className='footer-link'
          target='_blank'
          href='https://twitter.com/davidguandev'
        >
          <i className='fa fa-twitter' />
        </a>
        <br />
        <a
          aria-label="Send a email to David"
          className="mail"
          href="mailto:davidguandev@gmail.com"
        >
          davidguandev@gmail.com
        </a>
        <div className="snack-bar">
          <p>All the assets cached locally.</p>
          <p>Ready for offline situations!</p>
        </div>
      </footer>
    )
  }
}
