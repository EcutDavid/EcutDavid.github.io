import React, { Component } from "react";

import data from "constants/articles";
import { ARTICLES } from "constants/domID";
import "styles/Articles.css";

const PREVIEW_COUNT = 6;
const OLDER_ARTICLES_ID = `${ARTICLES}-older`;

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  renderArticle(article) {
    return (
      <article
        className="flex-container"
        key={article.url}
        aria-label={`${article.name}, ${article.date}`}
      >
        <div className="small-11 small-centered medium-9 large-7">
          <div className="article">
            <h3>
              <a className="link" target="_blank" rel="noopener noreferrer" href={article.url}>
                {article.name}
              </a>
            </h3>
            <span className="date">{article.date}</span>
          </div>
        </div>
      </article>
    );
  }

  render() {
    const { expanded } = this.state;

    return (
      <div id={ARTICLES} className="articles-container">
        <h2 className="title">Articles</h2>
        <div className="content">
          {data.slice(0, PREVIEW_COUNT).map(this.renderArticle)}
          {data.length > PREVIEW_COUNT && (
            <>
              <div className="articles-controls">
                <button
                  className="articles-toggle"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={OLDER_ARTICLES_ID}
                  onClick={() => this.setState(previous => ({ expanded: !previous.expanded }))}
                >
                  {expanded ? "Show fewer articles" : "Show all articles"}
                </button>
              </div>
              <div id={OLDER_ARTICLES_ID} hidden={!expanded}>
                {data.slice(PREVIEW_COUNT).map(this.renderArticle)}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
