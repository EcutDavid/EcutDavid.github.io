import React, { Component } from 'react'

import Work from './Work'
import data from 'constants/worksData'
import { MY_WORKS } from 'constants/domID'
import 'styles/Works.scss'

export default class Works extends Component {
  constructor() {
    super()
    this.state={
      // Just have 5 projects for now, no need for the toggle button.
      showAll: true
    }
  }

  toggleShowAll() {
    const { showAll } = this.state

    this.setState({
      showAll: !showAll
    });
  }

  render() {
    const { showAll } = this.state
    return (
      <div id={MY_WORKS}>
        <h2 className='title'>Projects</h2>
        <div className='flex-container work-container'>
          {
            data.slice(0, showAll ? 6 : 3).map((d, k) =>
              <Work
                {...d}
                key={k}
                className='column work medium-6 large-4'
                index={k}
              />
            )
          }
        </div>
        {!showAll && (
          <button
            className={`button action-button ${showAll ? 'hide-button' : ''}`}
            disabled={showAll ? true : false}
            onClick={() => this.toggleShowAll()}
          >
            More
          </button>
        )}
      </div>
    )
  }
}
