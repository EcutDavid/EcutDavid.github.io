import React from 'react'

import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'
import reddit from '../assets/reddit.png'
import xkcd from '../assets/xkcd-r.png'
import b from '../assets/b.png'
import b_3d from '../assets/b-3d.png'
import uccValidator from '../assets/ucc-validator.png'

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
    title: 'Splunk UCC configuration validator',
    picture: uccValidator,
    description: (
      <div>
        <p>An online application helps Splunk add-on developers saving time from debugging errors caused by errors in configuration.</p>
        <a href='https://github.com/EcutDavid/splunk-ucc-config-validator' target='_blank'>Github repo</a>
      </div>
    )
  }, {
    title: 'Bounce balls',
    picture: b_3d,
    isIframe: true,
    src: 'http://davidguan.me/bounce-balls-3D/',
    description: (
      <div>
        <p>Built with <b>three.js</b>.</p>
        <p><a href='https://github.com/EcutDavid/bounce-balls-3D' target='_blank'>Github repo</a></p>
      </div>
    )
  },{
    title: 'D3 in 20 days',
    picture: dv20Pic,
    description: (
      <div>
        <p>Data visualization practice.</p>
        <p><b>React, D3.js</b></p>
        <a href='https://github.com/EcutDavid/D3In20Days' target='_blank'>Github repo</a>
      </div>
    )
  },  {
    title: 'Simple reddit',
    picture: reddit,
    description: (
      <div>
        <p>User authentication, post submit, up & down vote, and comments.</p>
        <p><b>node.js, React, Redux</b></p>
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
