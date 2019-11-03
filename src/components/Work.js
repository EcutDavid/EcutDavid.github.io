import React, { Component } from "react";
import "styles/Work.scss";

export default class Work extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      title,
      picture,
      description,
      className,
      index,
      isIframe,
      pictureAlt
    } = this.props;

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
          />
        )}
        <h3 aria-label={`Project ${title}`}>{title}</h3>
        <div className="description">{description}</div>
      </section>
    );
  }
}
