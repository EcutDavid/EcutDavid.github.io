import React, { Component } from 'react'

import Work from './Work'
import data from 'constants/worksData'
import { MY_WORKS } from 'constants/domID'

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
            data.slice(0, 3).map((d, k) => (<Work {...d} key={k} />))
          }
        </div>
        {
          showAll ? (
            <div>
              <div className='row work-container'>
                {data.slice(3, 6).map((d, k) => (<Work {...d} key={k} />))}
              </div>
            </div>
          ) : (
            <noscript />
          )
        }
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
