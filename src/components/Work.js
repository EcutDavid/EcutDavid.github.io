import React, { Component } from 'react'
import 'styles/Work.scss'

export default class Work extends Component {
  constructor() {
    super()
    this.state = { pageLoaded: false };
  }

  componentDidMount() {
    const setPageLoaded = () => setTimeout(() => {
      this.setState({ pageLoaded: true });
    }, 1300)

    window.onload = () => {
      setPageLoaded();
    }
    setPageLoaded();
  }

  render() {
    const { title, picture, description, className, index, isIframe, src, href } = this.props
    const { pageLoaded } = this.state;

    return (
      <div className={className} style={index === 5 ? { float: 'right' } : {}}>
        {
          !isIframe ?(
            <a href={href} target='_blank'>
              <img className='img thumbnail' src={picture} />
            </a>
          ) : (
            <iframe
              className='img thumbnail'
              width="300"
              height="300"
              scrolling="no"
              src={pageLoaded ? src : ''}
            />
          )
        }
        <h5>{ title }</h5>
        { description }
      </div>
    )
  }
}
