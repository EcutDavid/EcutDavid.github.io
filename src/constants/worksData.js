import React from 'react'

import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'
import xkcd from '../assets/xkcd-r.png'
import b from '../assets/b.png'
import webglWrokshop from '../assets/webgl-wrokshop.png'
import uccValidator from '../assets/ucc-validator.png'
import photoFilter from '../assets/photo-filter.png'

export default [{
  title: 'webgl-workshop.com',
  href: 'https://github.com/EcutDavid/webgl-workshop',
  picture: webglWrokshop,
  description: (
    <div>
      <p>A step by step practical guide for implementing 2D/3D rendering with WebGL.</p>
      <p><a href='https://github.com/EcutDavid/webgl-workshop' target='_blank'>Github repo</a></p>
    </div>
  )
},{
    title: 'Photo Filter',
    href: 'http://davidguan.me/photo-filter',
    picture: photoFilter,
    description: (
      <div>
        <p>An online application allows you filter an image and download the result.</p>
        <a href='https://github.com/EcutDavid/photo-filter' target='_blank'>Github repo</a>
      </div>
    )
  }, {
    title: 'Splunk UCC configuration validator',
    href: 'https://github.com/EcutDavid/splunk-ucc-config-validator',
    picture: uccValidator,
    description: (
      <div>
        <p>An online application helps Splunk add-on developers saving time from debugging problems caused by errors in configuration.</p>
        <a href='https://github.com/EcutDavid/splunk-ucc-config-validator' target='_blank'>Github repo</a>
      </div>
    )
  },{
  title: 'Data | World Bank',
  href: 'http://data.worldbank.org/',
  picture: wbPic,
  description: (
    <div>
      <p>Implemented front-end routing, state management, overview pages, part of data viz charts and performance tuning.</p>
      <a href='http://data.worldbank.org/' target='_blank'>Production website</a>
    </div>
  )
}, {
    title: 'D3 in 20 days',
    href: 'https://github.com/EcutDavid/D3In20Days',
    picture: dv20Pic,
    description: (
      <div>
        <p>One of my data visualization practice.</p>
        <p><b>React, D3.js</b></p>
        <a href='https://github.com/EcutDavid/D3In20Days' target='_blank'>Github repo</a>
      </div>
    )
  }, {
    title: 'React native xkcd viewer',
    href: 'https://github.com/EcutDavid/react-native-xkcdReader',
    picture: xkcd,
    description: (
      <div>
        <p><b>Golang</b>, <b>React Native</b></p>
        <a href='https://github.com/EcutDavid/react-native-xkcdReader' target='_blank'>Github repo</a>
      </div>
    )
  }
]
