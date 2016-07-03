import React from 'react'

import cncPic from '../assets/CNC.png'
import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'

export default [{
  title: 'Data | World Bank',
  picture: wbPic,
  description: (
    <div>
      <p>My first project in Wiredcraft, a data visualization website.</p>
      <p>Implement the requirements in front-end and improved the performance of application.</p>
      <p>You can view the website <a href='http://beta.data.worldbank.org/' target='_blank'>here</a>.</p>
    </div>
  ),
  className: 'column small-12 medium-6 large-4'
}, {
  title: 'CNC software',
  picture: cncPic,
  description: (
    <div>
      <p>Aim at control CNC(Computer Numerical Control) card which is plugged in PC.</p>
      <p>Made from <b>C#, WPF and Open GL</b>. Source code <a href='https://github.com/EcutDavid/eCut-CNC-software' target='_blank'>here</a>.</p>
    </div>
  ),
  className: 'column small-12 medium-6 large-4'
}, {
  title: 'Data visualization in 20 days',
  picture: dv20Pic,
  description: (
    <div>
      <p>Personal workshop project, from Mar. 2016 to Apr. 2016.</p>
      <p>Made from <b>React, d3.js</b>. Source code <a href='https://github.com/EcutDavid/D3In20Days' target='_blank'>here</a>.</p>
    </div>
  ),
  className: 'column small-12 medium-centered large-uncentered medium-6 large-4'
}]
