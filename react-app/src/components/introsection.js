import React, { Component } from 'react';
import './introsection.css';
import BaseSection from './basesection';
import ContentList from './contentlist';
import RatedList from './ratedlist';


class IntroSection extends Component {
    render() {
        return (
            <BaseSection sectionData={this.props.sectionData} className="intro-section">
                <div className="ms-Grid-row">
                    <div className="text-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12 ms-u-xl4 ms-u-xxl4">
                        <div className="ms-Grid-row">
                            <div className="text-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg6 ms-u-xl12 ms-u-xxl12">
                                <div className="sectiontext top ms-font-l" dangerouslySetInnerHTML={{__html: this.props.sectionData.text}} />
                            </div>
                            <div className="text-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg6 ms-u-xl12 ms-u-xxl12">
                                <h3 className="contentlist-header ms-font-xl">{this.props.sectionData.currentJob.label}</h3>
                                <div className="sectiontext ms-font-l" dangerouslySetInnerHTML={{__html: this.props.sectionData.currentJob.text}} />
                            </div>
                            <div className="text-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg6 ms-u-xl12 ms-u-xxl12">
                                <h3 className="contentlist-header ms-font-xl">{this.props.sectionData.humanLanguages.label}</h3>
                                <div className="sectiontext ms-font-l" dangerouslySetInnerHTML={{__html: this.props.sectionData.humanLanguages.text}} />
                            </div>
                        </div>
                    </div>
                    <div className="assignmenttypes-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg6 ms-u-xl4 ms-u-xxl4">
                        <RatedList listData={this.props.sectionData.keySkills} />
                        <RatedList listData={this.props.sectionData.assignmentTypes} />
                    </div>
                    <div className="keytechnologies-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg6 ms-u-xl4 ms-u-xxl4">
                        <RatedList listData={this.props.sectionData.keyTechnologies} />
                    </div>
                    <div className="keyadvantages-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12 ms-u-xl12 ms-u-xxl12">
                        <ContentList contentListData={this.props.sectionData.keyAdvantages} />
                    </div>
                </div>
            </BaseSection>
        );
    }
}

export default IntroSection;
