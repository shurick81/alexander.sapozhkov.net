import React, { Component } from 'react';
import './administratorsection.css';
import BaseSection from './basesection';
import ContentList from './contentlist';

class AdministratorSection extends Component {
    render() {
        return (
            <BaseSection sectionData={this.props.sectionData} className="administrator-section">
                <ContentList contentListData={this.props.sectionData.keyAssets} />
            </BaseSection>
        );
    }
}

export default AdministratorSection;
