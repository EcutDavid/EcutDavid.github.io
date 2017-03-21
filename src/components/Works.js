import React, { Component } from 'react'

import Work from './Work'
import data from 'constants/worksData'
import { MY_WORKS } from 'constants/domID'
import 'styles/Works.scss'

export default class Works extends Component {
  constructor() {
    super()
    this.state={
      showActionButton: true,
      showAll: false
    }
  }

  toggleShowAll() {
    const { showAll } = this.state

    this.setState({
      showAll: !showAll
    });
    setTimeout(() => {
      this.setState({showActionButton: false});
    }, 1500);
  }

  render() {
    const { showAll, showActionButton } = this.state
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
        {showActionButton && (
          <button
            className={`button action-button ${showAll ? 'hide-button' : ''}`}
            disabled={showAll ? true : false}
            onClick={() => this.toggleShowAll()}
          >
            Show More
          </button>
        )}
      </div>
    )
  }
}
