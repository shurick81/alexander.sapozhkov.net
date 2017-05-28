import React, { Component } from 'react';
import './architectsection.css';
import BaseSection from './basesection';
import ContentList from './contentlist';

class ArchitectSection extends Component {
    render() {
        return (
            <BaseSection sectionData={this.props.sectionData} className="architect-section">
                <ContentList contentListData={this.props.sectionData.keyAssets} />
            </BaseSection>
        );
    }
}

export default ArchitectSection;
