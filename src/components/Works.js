import React, { Component } from 'react'

import Work from './Work'
import cncPic from '../assets/CNC.png'
import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'

const data = {
  title: 'Data | World Bank',
  picture: wbPic,
  description: (
    <div>
      <p>My first project in Wiredcraft, a data visualization website.</p>
      <p>My responsibilities are implement the requirements in front-end and improve the performance of application.</p>
      <p>Started from Nov. 2015.</p>
      <p>You can view the website <a href='http://beta.data.worldbank.org/' target='_blank'>here</a>.</p>
    </div>
  ),
  className: 'column small-12 medium-6 large-4'
}

export default class Works extends Component {
  render() {
    return (
      <div>
        <div className='row work-container'>
          <Work
            title={data.title}
            picture={data.picture}
            description={data.description}
            className={data.className}
          />
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
      </div>
    )
  }
}
// <div className="column small-10 medium-6 medium-uncentered large-uncentered small-centered large-4">
