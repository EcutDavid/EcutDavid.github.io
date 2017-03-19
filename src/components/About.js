import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import Works from './Works'
import 'styles/About.scss'


export default class About extends Component {
  render() {
    return (
      <div className="About row" id={ABOUT_ME}>
        <div className='column small-11 small-centered'>
          <div className='row'>
            <div className='column small-10 small-centered'>
              <p>Currently working as a developer at <a href='https://www.splunk.com/' target='_blank'>Splunk</a>.</p>
              <p>Have experience in building websites and single page applications with React, Redux and node.js.</p>
              <p>Enjoy writing clean code and solving complex problems.</p>
              <p>Built some back-end services in <b>C#, node.js</b> with <b>AWS services</b>.</p>
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
              linkedin
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
// <div className="column small-10 medium-6 medium-uncentered large-uncentered small-centered large-4">
