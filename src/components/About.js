import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import Works from './Works'
import 'styles/About.scss'

const DESCRIPTION_LIST = [
  'Currently working as a developer at Splunk.',
  'Have experience in building websites and single page applications with React, Redux and node.js.',
  'Enjoy writing clean code and solving complex problems.',
  'Built some back-end services in C#, node.js with AWS services.'
];

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      descriptionList: DESCRIPTION_LIST.map(d => ({
        text: d,
        pointer: 0
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
      }, 40);
    }
  }

  componentDidMount() {
    this.incrementDescriptionText();
  }

  mapDescriptionList() {
    const { descriptionList } = this.state;
    return descriptionList.map(({text, pointer}, i) => {
      const length = text.length;
      const isDone = (i === (descriptionList.length - 1)) &&
        pointer === length;
      return pointer > 0 && (
        <div key={i}>
          <p>
            {text.slice(0, pointer)}
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
              href='https://cn.linkedin.com/in/david-guan-64b69b110'
              >
              <i className='fa fa-linkedin-square' />
              Linkedin
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
