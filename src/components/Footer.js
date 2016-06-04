import React, { Component } from 'react'

import { CONTACT_ME } from 'constants/domID'
import 'styles/Footer.scss'


export default class Footer extends Component {
  render() {
    return (
      <div className="Footer " id={CONTACT_ME}>

        <a href="mailto:davidguandev@gmail.com">
          <i className='fa fa-send' />
          Send me mail
        </a>
      </div>
    )
  }
}
