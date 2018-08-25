import React, { Component } from 'react'

import data from 'constants/articles'
import { ARTICLES } from 'constants/domID'
import 'styles/Articles.scss'

const DATE_NOW = new Date(Date.now());
function getDateDiff(oldDate) {
  const date1 = new Date(oldDate);
  const timeDiff = Math.abs(DATE_NOW.getTime() - date1.getTime());
  const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return `${days} day${days > 1 ? 's' : ''} ago`;
}

export default class Articles extends Component {
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
    }, 0);
  }

  render() {
    const { showAll, showActionButton } = this.state
    return (
      <div id={ARTICLES} className='articles-container'>
        <h2 className='title'>Articles</h2>
        <div className='content'>
        {
          data.slice(0, showAll ? Number.MAX_VALUE : 5).map((d, i) =>
            <article className='flex-container' key={i} aria-label={`${d.name}, ${getDateDiff(d.date)}`}>
                <div className='small-11 small-centered medium-9 large-7'>
                  <div className="article">
                    <h3><a className='link' target='_blank' href={d.url}>{d.name}</a></h3>
                    <span className='date'>{getDateDiff(d.date)}</span>
                  </div>
                </div>
            </article>
          )
        }
        </div>
        {showActionButton && (
          <button
            className={`button action-button ${showAll ? 'hide-button' : ''}`}
            disabled={showAll ? true : false}
            onClick={() => this.toggleShowAll()}
          >
            Display more articles
          </button>
        )}
      </div>
    )
  }
}
