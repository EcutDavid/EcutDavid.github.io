import React, { Component } from 'react'

export default class Work extends Component {
  render() {
    const { title, picture, description, className } = this.props

    return (
      <div className={className}>
        <img className='img thumbnail' src={picture} />
        <h5>{ title }</h5>
        { description }
      </div>
    )
  }
}
