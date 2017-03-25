import React from 'react'

import cncPic from '../assets/CNC.png'
import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'
import reddit from '../assets/reddit.png'
import xkcd from '../assets/xkcd-r.png'
import b from '../assets/b.png'
import b_3d from '../assets/b-3d.png'

export default [{
  title: 'Data | World Bank',
  picture: wbPic,
  description: (
      <div>
        <p>My first project in Wiredcraft.</p>
        <p>Implemented the requirements in front-end and improved the performance.</p>
        <a href='http://data.worldbank.org/' target='_blank'>Production website</a>
      </div>
    )
  }, {
    title: 'CNC software',
    picture: cncPic,
    description: (
      <div>
        <p>A desktop application for control CNC cards which plugged in PC.</p>
        <p><b>C#, WPF and Open GL</b></p>
        <a href='https://github.com/EcutDavid/eCut-CNC-software' target='_blank'>Github repo</a>
      </div>
    )
  }, {
    title: 'Data visualization in 20 days',
    picture: dv20Pic,
    description: (
      <div>
        <p>Data visualization practice.</p>
        <p><b>React.js, d3.js</b></p>
        <a href='https://github.com/EcutDavid/D3In20Days' target='_blank'>Github repo</a>
      </div>
    )
  }, {
    title: 'Bounce balls, 3D',
    picture: b_3d,
    description: (
      <div>
        <p>Built with <b>three.js</b>.</p>
        <p><a href='https://github.com/EcutDavid/bounce-balls-3D' target='_blank'>Github repo</a></p>
        <a href='http://davidguan.me/bounce-balls-3D/' target='_blank'>Online demo</a>
      </div>
    )
  }, {
    title: 'Simple reddit',
    picture: reddit,
    description: (
      <div>
        <p>User authentication, post submit, up & down vote, and comments.</p>
        <p><b>React.js, node.js, Redux.js</b></p>
        <a href='https://github.com/EcutDavid/simple-reddit' target='_blank'>Github repo</a>
      </div>
    )
  }, {
    title: 'React native xkcd viewer',
    picture: xkcd,
    description: (
      <div>
        <p><b>Golang</b>, <b>React Native</b></p>
        <a href='https://github.com/EcutDavid/react-native-xkcdReader' target='_blank'>Github repo</a>
      </div>
    )
  }
]
