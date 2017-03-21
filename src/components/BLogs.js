import React, { Component } from 'react'

import { BLOGS } from 'constants/domID'
import 'styles/Blogs.scss'


export default class Blogs extends Component {
  render() {
    return (
      <div className='Blogs' id={BLOGS}>
        <h2 className='title'>Blogs</h2>
        <div className='row column small-11 small-centered'>
          <a
            className='column small-12 medium-6 container'
            target='_blank'
            href='https://medium.com/@davidguandev'
          >
            <i className='fa fa-medium' />
            Medium
          </a>
          <a
            className='column small-12 medium-6 container cnblogs'
            target='_blank'
            href='http://www.cnblogs.com/E-WALKER/'
          >
            <i className='fa fa-book' />
            Cnblogs(written in Chinese)
          </a>
        </div>
      </div>
    )
  }
}
