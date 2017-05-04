import React, { Component } from 'react';
import './section.css';
import SectionTitle from './sectionTitle';
import 'react-responsive-carousel/lib/styles/carousel.css';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class BaseSection extends Component {
  render() {
    var backGroundImage = (this.props.sectionData.moodPhoto === undefined) ? null : this.props.sectionData.moodPhoto;
    var className = (this.props.className === undefined) ? "section" : "section " + this.props.className;
    return (
        <section className={className}>
            <Element name={this.props.sectionData.id} />
            <SectionTitle
                backgroundImage={backGroundImage}
                displayTitle={this.props.sectionData.title}
                anouncement={this.props.sectionData.anouncement}
                icon={this.props.sectionData.icon}
            />
            <div className="section-body">
                {this.props.children}
            </div>
        </section>
    );
  }
}

export default BaseSection;
