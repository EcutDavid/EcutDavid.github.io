import React, { Component } from 'react'

import Work from './Work'
import data from 'constants/worksData'
import { MY_WORKS } from 'constants/domID'
import 'styles/Works.scss'

export default class Works extends Component {
  constructor() {
    super()
    this.state={ showAll: false }
  }

  render() {
    const { showAll } = this.state
    return (
      <div id={MY_WORKS}>
        <h2 className='title'>My works</h2>
        <div className='row work-container'>
          {
            data.slice(0, showAll ? 6 : 3).map((d, k) =>
              <Work
                {...d}
                key={k}
                className={`column work small-12 medium-6 large-4 ${(!showAll && k == 2) ? 'medium-centered large-uncentered' : ''}`}
                index={k}
              />
            )
          }
        </div>
        <button
          className='button action-button'
          onClick={() => { this.setState({ showAll: !showAll })}}
        >
          { showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    )
  }
}
