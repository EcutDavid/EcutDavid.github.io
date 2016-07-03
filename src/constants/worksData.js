import React from 'react'

import cncPic from '../assets/CNC.png'
import wbPic from '../assets/WB.png'
import dv20Pic from '../assets/20.png'
import gm from '../assets/gm.png'
import reddit from '../assets/reddit.png'
import books from '../assets/books.png'

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
    title: 'Weather application',
    picture: gm,
    description: (
      <div>
        <p>Click anywhere, show you the weather.</p>
        <p><b>Google map API</b>. Source code in <a href='https://github.com/EcutDavid/google-map-weather' target='_blank'>Github repo</a>.</p>
        <p>View the <a href='http://davidguan.me/google-map-weather/' target='_blank'>demo website</a>.</p>
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
    title: 'Restful API in golang',
    picture: books,
    description: (
      <div>
        <p>Allow user send `get`, `post`, and `put` to data in server side.</p>
        <p><b>Golang, React.js</b>. Source code in <a href='https://github.com/EcutDavid/restful-books-golang' target='_blank'>Github repo</a>.</p>
        <p>View the <a href='http://davidguan.me/restful-books-golang/' target='_blank'>demo website</a>.</p>
      </div>
    ),
    className: 'column small-12 medium-centered large-uncentered medium-6 large-4'
  }
]
