import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'

export default class About extends Component {
  render() {
    return (
      <div className="About" id={ABOUT_ME}>
        PROJECTS
        PROFILES
        WORK EXPERIENCES
      </div>
    )
  }
}
