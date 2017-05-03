import React, { Component } from 'react';
import './section.css';
import SectionTitle from './sectionTitle';
import 'react-responsive-carousel/lib/styles/carousel.css';

class Section extends Component {
  render() {
    var backGroundImage = (this.props.sectionData.moodPhoto === undefined) ? null : this.props.sectionData.moodPhoto;
    var className = (this.props.className === undefined) ? "section" : "section " + this.props.className;
    return (
        <section className={className}>
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

export default Section;
