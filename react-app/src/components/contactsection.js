import React, { Component } from 'react';
import './contactsection.css';
import BaseSection from './basesection';
import ContactLine from './contactline';

class ContactSection extends Component {
    render() {
        var contentLines = this.props.sectionData.contactLines.map((contactLineData, index)=>
            <ContactLine contactLineData={contactLineData} key={index} />
        );
        return (
            <BaseSection sectionData={this.props.sectionData} className="contact-section">
                <div className="ms-Grid-row">
                    <div className="contactsectiontext-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12 ms-u-xl4 ms-u-xlPush8 ms-u-xxl4 ms-u-xxlPush8">
                        <div className="sectiontext">
                            {this.props.sectionData.text}
                        </div>
                    </div>
                    <div className="contactsectionlist-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12 ms-u-xl8 ms-u-xlPull4 ms-u-xxl8 ms-u-xxlPull4">
                        <div className="contactlist">
                            {contentLines}
                        </div>
                    </div>
                    <div className="feedbackform-col ms-Grid-col ms-u-sm12">
                        <iframe className="feedbackform" src="https://docs.google.com/forms/d/e/1FAIpQLSd-8xbYBFcff5NoqdEhS37wUmxTeoltHeL4FuL7DXIOBjDCkA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading feedback form...</iframe>
                    </div>
                </div>
            </BaseSection>
        );
    }
}

export default ContactSection;
