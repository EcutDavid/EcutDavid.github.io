import React from 'react'

import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'
import reddit from '../assets/reddit.png'
import xkcd from '../assets/xkcd-r.png'
import b from '../assets/b.png'
import webglWrokshop from '../assets/webgl-wrokshop.png'
import uccValidator from '../assets/ucc-validator.png'

export default [{
  title: 'Data | World Bank',
  picture: wbPic,
  description: (
      <div>
        <p>My first project in Wiredcraft.</p>
        <p>Implemented front-end routing, state management, overview pages, part of data viz charts and performance tuning.</p>
        <a href='http://data.worldbank.org/' target='_blank'>Production website</a>
      </div>
    )
  }, {
    title: 'Splunk UCC configuration validator',
    picture: uccValidator,
    description: (
      <div>
        <p>An online application helps Splunk add-on developers saving time from debugging problems caused by errors in configuration.</p>
        <a href='https://github.com/EcutDavid/splunk-ucc-config-validator' target='_blank'>Github repo</a>
      </div>
    )
  }, {
    title: 'webgl-workshop.com',
    picture: webglWrokshop,
    // isIframe: true,
    // src: 'http://davidguan.me/bounce-balls-3D/',
    description: (
      <div>
        <p>A step by step physics practicing guide for implementing 2D/3D rendering with WebGL.</p>
        <p><a href='https://github.com/EcutDavid/webgl-workshop' target='_blank'>Github repo</a></p>
      </div>
    )
  },{
    title: 'D3 in 20 days',
    picture: dv20Pic,
    description: (
      <div>
        <p>One of my data visualization practice.</p>
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
