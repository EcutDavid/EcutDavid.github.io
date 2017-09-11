import React, { Component } from 'react'
import BLogs from 'components/BLogs'

import { CONTACT_ME } from 'constants/domID'
import 'styles/Footer.scss'


export default class Footer extends Component {
  render() {
    return (
      <div className="Footer " id={CONTACT_ME}>
        <a
          className='footer-link'
          target='_blank'
          href='https://www.linkedin.com/in/david-guan-64b69b110'
        >
          <i className='fa fa-linkedin-square' />
        </a>
        <a
          className='footer-link'
          target='_blank'
          href='https://www.reddit.com/user/DavidGuanDev/'
        >
          <i className='fa fa-reddit' />
        </a>
        <a href="mailto:davidguandev@gmail.com">
          davidguandev@gmail.com
        </a>
      </div>
    )
  }
}
