import React, { Component } from "react";
import "styles/Work.css";

export default class Work extends Component {
  render() {
    const {
      title,
      date,
      picture,
      description,
      className,
      index,
      pictureAlt
    } = this.props;

    return (
      <section
        aria-label={`Project ${title}`}
        className={className}
        style={index === 5 ? { float: "right" } : {}}
      >
        <img className="img thumbnail" src={picture} alt={pictureAlt} />
        <h3>{title}</h3>
        {date && <span className="work-date">{date}</span>}
        <div className="description">{description}</div>
      </section>
    );
  }
}
