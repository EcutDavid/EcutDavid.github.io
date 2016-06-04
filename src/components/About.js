import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import 'styles/About.scss'


export default class About extends Component {
  render() {
    return (
      <div className="About row" id={ABOUT_ME}>
        <div className='column small-11 small-centered'>
          <p>Hi, I'm currently working as a developer at <a>Wiredcraft</a>.</p>
          <p>I have experience building websites(or single page applications) using complex frameworks such as <b>React, Redux, Angular </b> in the front end(using latest syntax feature such as ES6, 7).</p>
          <p>Also built some back-end services in <b>C#, node.js</b>, interested in building mobile applications in <b>Swift, React-native</b>.</p>
          <p>Except coding, I like reading and going on hiking holidays.</p>
          <div className='row'>
            <a
              className='column small-6 medium-3 container'
              target='_blank'
              href='https://github.com/EcutDavid'
              >
              <i className='fa fa-github'>
              </i>
              Github
            </a>
            <a
              className='column small-6 medium-3 container'
              target='_blank'
              href='http://stackoverflow.com/users/5076405/david-guan'
              >
              <i className='fa fa-stack-overflow'>
              </i>
              Stack overflow
            </a>
            <a
              className='column small-6 medium-3 container'
              target='_blank'
              href='https://cn.linkedin.com/in/david-guan-64b69b110'
              >
              <i className='fa fa-linkedin-square'>
              </i>
              linkedin
            </a>
            <a
              className='column small-6 medium-3 container'
              target='_blank'
              href='https://twitter.com/davidguandev'
              >
              <i className='fa fa-twitter'>
              </i>
              Twitter
            </a>
          </div>
        </div>
      </div>
    )
  }
}
