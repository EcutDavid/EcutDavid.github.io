import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import DESCRIPTION_LIST from 'constants/descriptionList'
import Works from './Works'
import 'styles/About.scss'


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
      <div className="About row" id={ABOUT_ME}>
        <div className='column small-11 small-centered'>
          <div className='row'>
            <div className='column small-10 small-centered description-list'>
              {
                this.mapDescriptionList()
              }
            </div>
          </div>
          <div className='row'>
            <a
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='https://github.com/EcutDavid'
              >
              <i className='fa fa-github' />
              Github
            </a>
            <a
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='http://stackoverflow.com/users/5076405/david-guan'
              >
              <i className='fa fa-stack-overflow' />
              Stack overflow
            </a>
            <a
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='https://medium.com/@davidguandev'
              >
              <i className='fa fa-medium' />
              Medium
            </a>
            <a
              className='column small-6 medium-3 account-container'
              target='_blank'
              href='https://www.youtube.com/channel/UCxSyYbODJF3ULNMoRwxjJbg'
            >
              <i className='fa fa-youtube' />
              Youtube channel
            </a>
          </div>
          <Works />
        </div>
      </div>
    )
  }
}
