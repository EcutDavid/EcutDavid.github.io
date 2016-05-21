import React, { Component } from 'react'

import { CONTACT_ME } from 'constants/domID'

class Header extends Component {
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

Header.defaultProps = {
}

export default Header
