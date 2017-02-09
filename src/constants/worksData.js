import React from 'react'

import cncPic from '../assets/CNC.png'
import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'
import gm from '../assets/gm.png'
import reddit from '../assets/reddit.png'
import xkcd from '../assets/xkcd-r.png'
import b from '../assets/b.png'
import b_3d from '../assets/b-3d.png'

export default [{
  title: 'Data | World Bank',
  picture: wbPic,
  description: (
      <div>
        <p>My first project in Wiredcraft, a data visualization website.</p>
        <p>Implement the requirements in front-end and improved the performance of application.</p>
        <p>View the <a href='http://data.worldbank.org/' target='_blank'>website</a>.</p>
      </div>
    ),
    className: 'column small-12 medium-6 large-4'
  }, {
    title: 'CNC software',
    picture: cncPic,
    description: (
      <div>
        <p>Aim at control CNC(Computer Numerical Control) card which is plugged in PC.</p>
        <p><b>C#, WPF and Open GL</b>. Source code in <a href='https://github.com/EcutDavid/eCut-CNC-software' target='_blank'>Github repo</a>.</p>
      </div>
    ),
    className: 'column small-12 medium-6 large-4'
  }, {
    title: 'Data visualization in 20 days',
    picture: dv20Pic,
    description: (
      <div>
        <p>Data visualization practises.</p>
        <p><b>React.js, d3.js</b>. Source code in <a href='https://github.com/EcutDavid/D3In20Days' target='_blank'>Github repo</a>.</p>
      </div>
    ),
    className: 'column small-12 medium-centered large-uncentered medium-6 large-4'
  }, {
    title: 'Bounce balls, 3D',
    picture: b_3d,
    description: (
      <div>
        <p>built with <b>three.js</b>, Source code in <a href='https://github.com/EcutDavid/bounce-balls-3D' target='_blank'>Github repo</a>.</p>
        <p>View the <a href='http://davidguan.me/bounce-balls-3D/' target='_blank'>demo website</a>.</p>
      </div>
    ),
    className: 'column small-12 medium-centered large-uncentered medium-6 large-4'
  }, {
    title: 'Simple reddit',
    picture: reddit,
    description: (
      <div>
        <p>User authentication, post submit, up & down vote, and comments.</p>
        <p><b>React.js, node.js, Redux.js</b>. Source code in <a href='https://github.com/EcutDavid/simple-reddit' target='_blank'>Github repo</a>.</p>
        <p>View the <a href='http://davidguan.me/simple-reddit' target='_blank'>demo website</a>.</p>
      </div>
    ),
    className: 'column small-12 medium-centered large-uncentered medium-6 large-4'
  }, {
    title: 'React native xkcd viewer',
    picture: xkcd,
    description: (
      <div>
        <p>All of the comics from xkcd.</p>
        <p><b>Golang, React.js</b>. Source code in <a href='https://github.com/EcutDavid/react-native-xkcdReader' target='_blank'>Github repo</a>.</p>
      </div>
    ),
    className: 'column small-12 medium-centered large-uncentered medium-6 large-4'
  }
]
