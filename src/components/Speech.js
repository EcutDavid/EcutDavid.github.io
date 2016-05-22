import React, { Component } from 'react'

import { PUBLIC_SPEECH } from 'constants/domID'

export default class Speech extends Component {
  render() {
    return (
      <div className="Speech" id={PUBLIC_SPEECH}>
        Bar camp
        js meetup
      </div>
    )
  }
}
