import React, { Component } from 'react'
import 'styles/Work.scss'

export default class Work extends Component {
  render() {
    const { title, picture, description, className, index } = this.props

    return (
      <div className={className} style={index === 5 ? { float: 'right' } : {}}>
        <img className='img thumbnail' src={picture} />
        <h5>{ title }</h5>
        { description }
      </div>
    )
  }
}
