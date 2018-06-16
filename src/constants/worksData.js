import React from 'react'

import wbPic from '../assets/WB.png'
import webglWrokshop from '../assets/webgl-wrokshop.png'
import uccValidator from '../assets/ucc-validator.png'
import photoFilter from '../assets/photo-filter.png'
import invaders from '../assets/invaders.png'

export default [{
  title: 'webgl-workshop.com',
  pictureAlt: 'Project webgl-workshop.com screen capture',
  picture: webglWrokshop,
  description: (
    <div>
      <p>A step by step practical guide for implementing 2D/3D rendering with WebGL.</p>
      <a
        href='https://github.com/EcutDavid/webgl-workshop'
        target='_blank'
        aria-label='The github repo of webgl-workshop.com'
      >
        Github repo
      </a>
    </div>
  )
},{
    title: 'Photo Filter',
    pictureAlt: 'Project Photo Filter screen capture',
    picture: photoFilter,
    description: (
      <div>
        <p>An online application allows you filter an image and download the result.</p>
        <a
          href='https://github.com/EcutDavid/photo-filter'
          target='_blank'
          aria-label='The github repo of Photo Filter'
        >
          Github repo
        </a>
      </div>
    )
  }, {
    title: 'Space Invaders',
    pictureAlt: 'Project Space Invaders screen capture',
    picture: invaders,
    description: (
      <div>
        <p>Yet another space invaders "copy".</p>
        <a
          href='https://davidguan.itch.io/space-invaders'
          target='_blank'
          aria-label='Play this space invaders copy on Itch.io'
        >
            Play on Itch.io
        </a>
        <p>-----------</p>
        <a
          href='https://github.com/EcutDavid/space-invaders'
          target='_blank'
          aria-label='The github repo of this space invaders copy'
        >
          Github repo
        </a>
      </div>
    )
  }, {
    title: 'Splunk UCC configuration validator',
    pictureAlt: 'Project Splunk UCC configuration validator screen capture',
    picture: uccValidator,
    description: (
      <div>
        <p>An online application helps Splunk add-on developers saving time from debugging problems caused by errors in configuration.</p>
        <a
          href='https://github.com/EcutDavid/splunk-ucc-config-validator'
          target='_blank'
          aria-label='The github repo of Splunk UCC configuration validator'
        >
          Github repo
        </a>
      </div>
    )
  },{
    title: 'Data | World Bank',
    pictureAlt: 'Project Data | World Bank screen capture',
    picture: wbPic,
    description: (
      <div>
        <p>Implemented front-end routing, state management, overview pages, part of data viz charts and performance tuning.</p>
        <a
          href='http://data.worldbank.org/'
          target='_blank'
          aria-label='The production website of Data | World Bank'
        >
          Production website
        </a>
      </div>
    )
  }
]
