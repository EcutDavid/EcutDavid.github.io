import React, { Component } from 'react'

import { ABOUT_ME } from 'constants/domID'
import 'styles/About.scss'
import cncPic from '../assets/CNC.png'
import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'
import capmpPic from '../assets/BarCamp.png'
import firstTalkPic from '../assets/FirstTalk.png'


export default class About extends Component {
  render() {
    return (
      <div className="About row" id={ABOUT_ME}>
        <div className='column small-11 small-centered'>
          <p>Hi, I'm currently working as a developer at <a href='http://www.wiredcraft.com' target='_blank'>Wiredcraft</a>.</p>
          <p>I have experience building websites(or single page applications) using complex frameworks such as <b>React, Redux and Angular </b> in the front end(using latest syntax feature such as ES6, 7).</p>
          <p>Also built some back-end services in <b>C#, node.js</b>, interested in building mobile applications in <b>Swift, React-native</b>.</p>
          <p>Except coding, I like reading and going on hiking holidays.</p>
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
              href='https://twitter.com/davidguandev'
              >
              <i className='fa fa-twitter' />
              Twitter
            </a>
          </div>
          <h2 className='title'>Works</h2>
          <div className='row work-container'>
            <div className="column small-12 medium-6 large-4">
              <img className='img thumbnail' src={wbPic}/>
              <h5>Data | World Bank</h5>
              <p>My first project in Wiredcraft, a data visualization website.</p>
              <p>My responsibilities are implement the requirements in front-end and improve the performance of application.</p>
              <p>Started from Nov. 2016.</p>
              <p>You can view the website <a href='https://github.com/EcutDavid/eCut-CNC-software' target='_blank'>here</a>.</p>
            </div>
            <div className="column small-12 medium-6 large-4">
              <img className='img thumbnail' src={cncPic}></img>
              <h5>CNC software</h5>
              <p>Aim at control CNC(Computer Numerical Control) card which is plugged in PC.</p>
              <p>My part-time work, from Mar. 2015 to Apr. 2015.</p>
              <p>Made from <b>C#, WPF and Open GL</b>. Source code <a href='https://github.com/EcutDavid/eCut-CNC-software' target='_blank'>here</a>.</p>
            </div>
            <div className="column small-12 medium-centered large-uncentered medium-6 large-4">
              <img className='img thumbnail' src={dv20Pic}></img>
                <h5>Data visualization in 20 days</h5>
                <p>Personal workshop project, from Mar. 2016 to Apr. 2016.</p>
                <p>Made from <b>React, d3.js</b>. Source code <a href='https://github.com/EcutDavid/D3In20Days' target='_blank'>here</a>.</p>
            </div>
          </div>
          <h2 className='title'>Speeches</h2>
          <div className='row work-container speeches'>
            <div className="column small-12 large-5">
              <img className='img thumbnail' src={firstTalkPic}/>
              <h5>React, webpack, and flux</h5>
              <p>Sep 14, 2015</p>
              <p>Talked about how to use React as View, Webpack as building tool, Flux as data management framework to spped up development.</p>
              <p>Event link <a href='http://www.meetup.com/Shanghai-JavaScript/events/224553688/#past-event-description-wrap' target='_blank'>here</a>.</p>
            </div>
            <div className="column small-12 large-5">
              <img className='img thumbnail' src={capmpPic}></img>
              <h5>Shanghai Barcamp Spring 2016</h5>
              <p>March 26, 2016</p>
              <p>Talked about how to study javascript and d3.js, and how to build project step by step.</p>
              <p>Event link <a href='http://www.meetup.com/Techyizu/events/229221694/' target='_blank'>here</a>.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// <div className="column small-10 medium-6 medium-uncentered large-uncentered small-centered large-4">
