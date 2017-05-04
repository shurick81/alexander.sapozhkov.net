import React, { Component } from 'react';
import './section.css';
import BaseSection from './basesection';
import IntroSection from './introsection';

class Section extends Component {
    render() {
        switch(this.props.sectionData.id) {
            case "intro":
                return <IntroSection sectionData={this.props.sectionData} />
            case "architect":
                return <BaseSection sectionData={this.props.sectionData} />
            default:
                return <BaseSection sectionData={this.props.sectionData} />
       }
    }
}

export default Section;
