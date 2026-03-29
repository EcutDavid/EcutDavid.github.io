import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import DESCRIPTION_LIST from 'constants/descriptionList'
import Works from './Works'
import Articles from './Articles'
import 'styles/About.css'


export default class About extends Component {
  mappingText(text, meta) {
    let newText = text;
    if (!meta || !meta.tagList) {
      return newText;
    }
    const { tagList } = meta;
    let displacement = 0;

    for (let t = 0; t < tagList.length; t++) {
      const {start, end, tag, attributes} = tagList[t];
      const domStartTag = `<${tag} ${attributes ? attributes : ''}>`;
      const domEndingTag = `</${tag}>`;

      const insertStart = start + displacement;
      newText = `${newText.slice(0, insertStart)}${domStartTag}${newText.slice(insertStart)}`;
      displacement += domStartTag.length;

      const insertEnd = end + displacement;
      newText = `${newText.slice(0, insertEnd)}${domEndingTag}${newText.slice(insertEnd)}`;
      displacement += domEndingTag.length;
    }
    return newText;
  }

  render() {
    return (
      <main className="About row" id={ABOUT_ME}>
        <div>
          <div className="flex-container">
            <section className='column small-10 description-list' aria-label='introduction'>
              {
                DESCRIPTION_LIST.map(({text, meta}, i) => (
                  <div key={i}>
                    <p>
                      <span dangerouslySetInnerHTML={{__html: this.mappingText(text, meta)}} />
                    </p>
                  </div>
                ))
              }
            </section>
          </div>
          <nav className="social-links" aria-label="Social links">
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/EcutDavid'>Github</a>
            <span className="social-separator">/</span>
            <a target='_blank' rel='noopener noreferrer' href='https://stackoverflow.com/users/5076405/david-guan'>Stack Overflow</a>
            <span className="social-separator">/</span>
            <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@davidguandev'>Medium</a>
            <span className="social-separator">/</span>
            <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCxSyYbODJF3ULNMoRwxjJbg'>Youtube</a>
          </nav>
          <Works />
          <Articles />
        </div>
      </main>
    )
  }
}
