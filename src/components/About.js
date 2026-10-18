import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import DESCRIPTION_LIST from 'constants/descriptionList'
import Articles from './Articles'
import Works from './Works'
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
          <Articles />
          <Works />
        </div>
      </main>
    )
  }
}
