import React, { Component } from 'react'

import Work from './Work'
import data from 'constants/worksData'
import { MY_WORKS } from 'constants/domID'
import 'styles/Works.css'

export default class Works extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id={MY_WORKS}>
        <h2 className='title'>Projects</h2>
        <div className='flex-container work-container'>
          {
            data.map((d, k) =>
              <Work
                {...d}
                key={k}
                className='column work medium-6 large-4'
                index={k}
              />
            )
          }
        </div>
      </div>
    )
  }
}
