import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'

export default class About extends Component {
  render() {
    return (
      <div className="About row" id={ABOUT_ME}>
        <div className="small-4 columns small-centered">
          PROJECTS
          PROFILES
          WORK EXPERIENCES
        </div>
      </div>
    )
  }
}
