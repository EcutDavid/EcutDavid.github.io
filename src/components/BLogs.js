import React, { Component } from 'react'

import { BLOGS } from 'constants/domID'

export default class Blogs extends Component {
  render() {
    return (
      <div className="Blogs" id={BLOGS}>
        CHINESE BLOGS
        MEDIUM BLOGS
        COMPONEY BLOGS
      </div>
    )
  }
}
