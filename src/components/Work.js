import React, { Component } from "react";
import "styles/Work.scss";

export default class Work extends Component {
  constructor() {
    super();
    this.state = { pageLoaded: false };
  }

  componentDidMount() {
    // const setPageLoaded = () => setTimeout(() => {
    //   this.setState({ pageLoaded: true });
    // }, 1300)
    // window.onload = () => {
    //   setPageLoaded();
    // }
    // setPageLoaded();
  }

  render() {
    const {
      title,
      picture,
      description,
      className,
      index,
      isIframe,
      src,
      pictureAlt
    } = this.props;
    const { pageLoaded } = this.state;

    return (
      <section
        aria-label={`Project ${title}`}
        className={className}
        style={index === 5 ? { float: "right" } : {}}
      >
        {!isIframe ? (
          <img className="img thumbnail" src={picture} alt={pictureAlt} />
        ) : (
          <iframe
            className="img thumbnail"
            width="300"
            height="300"
            scrolling="no"
            src={pageLoaded ? src : ""}
          />
        )}
        <h3 aria-label={`Project ${title}`}>{title}</h3>
        <div className="description">{description}</div>
      </section>
    );
  }
}
