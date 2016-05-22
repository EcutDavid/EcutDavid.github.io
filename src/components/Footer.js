import React, { Component } from 'react'

import { CONTACT_ME } from 'constants/domID'

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer" id={CONTACT_ME}>
        EMAIL
        LINKIN
        GITHuB
        STACKOVERFLOW
      </div>
    )
  }
}
