import React, { Component } from 'react';
import './developersection.css';
import BaseSection from './basesection';
import ContentList from './contentlist';

class DeveloperSection extends Component {
    render() {
        return (
            <BaseSection sectionData={this.props.sectionData} className="developer-section">
                <ContentList contentListData={this.props.sectionData.keyAssets} />
            </BaseSection>
        );
    }
}

export default DeveloperSection;
