import React, { Component } from 'react';
import './section.css';
import BaseSection from './basesection';
import IntroSection from './introsection';
import ArchitectSection from './architectsection';
import DeveloperSection from './developersection';
import AdministratorSection from './administratorsection'
import AssignmentsSection from './assignmentssection'
import ContactSection from './contactsection';

class Section extends Component {
    render() {
        switch(this.props.sectionData.id) {
            case "intro":
                return <IntroSection sectionData={this.props.sectionData} />
            case "architect":
                return <ArchitectSection sectionData={this.props.sectionData} />
            case "developer":
                return <DeveloperSection sectionData={this.props.sectionData} />
            case "administrator":
                return <AdministratorSection sectionData={this.props.sectionData} />
            case "assignments":
                return <AssignmentsSection sectionData={this.props.sectionData} />
            case "contact":
                return <ContactSection sectionData={this.props.sectionData} />
            default:
                return (
                    <BaseSection sectionData={this.props.sectionData} >
                        <span>This section is under construction</span>
                    </BaseSection>
                );
       }
    }
}

export default Section;
