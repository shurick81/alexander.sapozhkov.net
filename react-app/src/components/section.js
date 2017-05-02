import React, { Component } from 'react';
import './section.css';
import SectionTitle from './sectionTitle';
import 'react-responsive-carousel/lib/styles/carousel.css';

class IntroSection extends Component {
  render() {
    var backGroundImage = (this.props.sectionData.moodPhoto === undefined) ? null : this.props.sectionData.moodPhoto;
    return (
        <section className="section">
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

export default IntroSection;
