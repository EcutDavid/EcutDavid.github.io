import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import DESCRIPTION_LIST from 'constants/descriptionList'
import Works from './Works'
import Articles from './Articles'
import 'styles/About.css'


export default class About extends Component {
  constructor() {
    super();
    this.state = {
      descriptionList: DESCRIPTION_LIST.map(({text, meta}) => ({
        meta,
        text: text,
        // Remove the typing animation
        pointer: 9999
      }))
    };
  }

  incrementDescriptionText() {
    const { descriptionList } = this.state;
    let incremented = false;
    descriptionList.forEach((d) => {
      if (incremented) {
        return;
      }
      if (d.text.length > d.pointer) {
        d.pointer++;
        incremented = true;
      }
    });
    if (incremented) {
      this.setState({descriptionList});
      setTimeout(() => {
        this.incrementDescriptionText();
      }, 30);
    }
  }

  componentDidMount() {
    this.incrementDescriptionText();
  }

  mappingText(text, pointer, meta) {
    let newText = text.slice(0, pointer);
    if (!meta || !meta.tagList) {
      return newText;
    }
    const { tagList } = meta;
    let tagListPointer = 0;
    let shouldWrapTag = false;
    let displacement = 0;
    let domEndingTag = '';

    for (let i = 0; i < newText.length; i++) {
      const {start, end, tag, attributes} = tagList[tagListPointer];
      const domStartTag = `<${tag} ${attributes ? attributes : ''}>`;
      domEndingTag = `</${tag}>`;

      if (i === (start + displacement)) {
        newText = `${newText.slice(0, i)}${domStartTag}${newText.slice(i)}`;
        displacement += domStartTag.length;
        i += domStartTag.length;
        shouldWrapTag = true;
      }

      if (i === (end + displacement)) {
        newText = `${newText.slice(0, i)}${domEndingTag}${newText.slice(i)}`;
        displacement += domEndingTag.length;
        i += domEndingTag.length;
        tagListPointer++;
        shouldWrapTag = false;
      }
    }
    if (shouldWrapTag) {
      newText += domEndingTag;
    }
    return newText;
  }

  mapDescriptionList() {
    const { descriptionList } = this.state;
    return descriptionList.map(({text, pointer, meta}, i) => {
      const length = text.length;
      const isDone = (i === (descriptionList.length - 1)) &&
        pointer === length;
      return pointer > 0 && (
        <div key={i}>
          <p>
            <span dangerouslySetInnerHTML={{__html: this.mappingText(text, pointer, meta)}} />
            {((pointer < length) || isDone) && <span className={`typing-cursor ${isDone ? 'done' : ''}`} />}
          </p>
        </div>
      )
    });
  }

  render() {
    return (
      <main className="About row" id={ABOUT_ME}>
        <div>
          <div className="flex-container">
            <section className='column small-10 description-list' aria-label='introduction'>
              {
                this.mapDescriptionList()
              }
            </section>
          </div>
          <div className="flex-container">
            <a
              aria-label="David's Github profile"
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='https://github.com/EcutDavid'
            >
              <i className='fa fa-github' />
              Github
            </a>
            <a
              aria-label="David's Stack overflow profile"
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='http://stackoverflow.com/users/5076405/david-guan'
            >
              <i className='fa fa-stack-overflow' />
              Stack overflow
            </a>
            <a
              aria-label="David's Medium homepage"
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='https://medium.com/@davidguandev'
            >
              <i className='fa fa-medium' />
              Medium
            </a>
            <a
              aria-label="David's Youtube channel"
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='https://www.youtube.com/channel/UCxSyYbODJF3ULNMoRwxjJbg'
            >
              <i className='fa fa-youtube' />
              Youtube channel
            </a>
          </div>
          <Works />
          <Articles />
        </div>
      </main>
    )
  }
}
