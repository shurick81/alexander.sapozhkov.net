import React, { Component } from 'react';
import './sectionTitle.css';

class SectionTitle extends Component {
  render() {
    var sectionTitleStyle = {
      background: "linear-gradient( rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0.5) )"
    }
    if (this.props.backgroundImage != null)
    {
      sectionTitleStyle = {
        background: "linear-gradient( rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0.5) ),url(" + require('../photos/' + this.props.backgroundImage + '-big.jpg') + ")"
      }
    };
    return (
      <div className="section-title ms-fontColor-white" style={sectionTitleStyle}>
        <h2 className="section-title-h ms-font-xl ms-fontWeight-semibold">
          <i className={`ms-Icon ms-Icon--${this.props.icon}`} aria-hidden="true"></i>
          <span className="section-title-label">{this.props.displayTitle}</span>
        </h2>
        <div className="section-title-anouncement ms-font-l">{this.props.anouncement}</div>
      </div>
    );
  }
}

export default SectionTitle;
