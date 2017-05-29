import React, { Component } from 'react';
import './basesection.css';
import SectionTitle from './sectiontitle';
import 'react-responsive-carousel/lib/styles/carousel.css';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

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
            <div className="section-body pagewidthlimitedncentered width-padding">
                { this.props.children }
            </div>
        </section>
    );
  }
}

export default BaseSection;
