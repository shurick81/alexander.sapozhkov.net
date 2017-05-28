import React, { Component } from 'react';
import './assignmentssection.css';
import BaseSection from './basesection';
import AssignmentList from './assignmentlist';

class AssignmentsSection extends Component {
    render() {
        return (
            <BaseSection sectionData={this.props.sectionData} className="assignment-section">
                <AssignmentList assignmentListData={this.props.sectionData.assignments} />
            </BaseSection>
        );
    }
}

export default AssignmentsSection;
