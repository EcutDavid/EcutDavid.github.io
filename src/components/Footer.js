import React, { Component } from 'react'

// TODO: setup Ga
import { CONTACT_ME } from 'constants/domID'
import 'styles/Footer.scss'


export default class Footer extends Component {
  render() {
    return (
      <div className="Footer " id={CONTACT_ME}>
        <a href="mailto:davidguandev@gmail.com">
          <i className='fa fa-send' />
          davidguandev@gmail.com
        </a>
      </div>
    )
  }
}
