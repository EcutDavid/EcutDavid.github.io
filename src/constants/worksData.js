import React from 'react'

import wbPic from '../assets/WB.png'
import webglWrokshop from '../assets/webgl-wrokshop.png'
import uccValidator from '../assets/ucc-validator.png'
import photoFilter from '../assets/photo-filter.png'
import invaders from '../assets/invaders.png'

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
    title: 'Space Invaders',
    href: 'https://davidguan.itch.io/space-invaders',
    picture: invaders,
    description: (
      <div>
        <p>Yet another space invaders "copy".</p>
        <a href='https://davidguan.itch.io/space-invaders' target='_blank'>Play on Itch.io</a>
        <p>-----------</p>
        <a href='https://github.com/EcutDavid/space-invaders' target='_blank'>Github repo</a>
      </div>
    )
  }
]
