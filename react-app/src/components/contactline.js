import React, { Component } from 'react';
import './contactline.css';

class ContactLine extends Component {
    render() {
        switch(this.props.contactLineData.class) {
            case "phone":
                return(
                    <div className='phoneline'>
                        <div className="ms-Grid-row">
                            <div className="contacticon-col ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2 ms-u-xl2 ms-u-xxl2">
                                <i className={"ms-Icon ms-Icon--" + this.props.contactLineData.icon} aria-hidden='true' />
                            </div>
                            <div className="contactdata-col ms-Grid-col ms-u-sm10 ms-u-md10 ms-u-lg10 ms-u-xl10 ms-u-xxl10">
                                {this.props.contactLineData.number}
                            </div>
                        </div>
                    </div>
                );
            case "linkedin":
                return(
                    <div className='linkedinline'>
                        <div className="ms-Grid-row">
                            <div className="contacticon-col ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2 ms-u-xl2 ms-u-xxl2">
                                <a href={this.props.contactLineData.url} className="linkedinlink">
                                    <img className="contacticon linkedinicon" src={require('../photos/linkedin-icon.png')}/>
                                </a>
                            </div>
                            <div className="contactdata-col ms-Grid-col ms-u-sm10 ms-u-md10 ms-u-lg10 ms-u-xl10 ms-u-xxl10">
                                <a href={this.props.contactLineData.url} className="linkedinlink">
                                    {this.props.contactLineData.url}
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case "email":
                return(
                    <div className='emailline'>
                        <div className="ms-Grid-row">
                            <div className="contacticon-col ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2 ms-u-xl2 ms-u-xxl2">
                                <a href={"mailto:"+this.props.contactLineData.address} className="emaillink">
                                    <i className={"ms-Icon ms-Icon--" + this.props.contactLineData.icon} aria-hidden='true'/>
                                </a>
                            </div>
                            <div className="contactdata-col ms-Grid-col ms-u-sm10 ms-u-md10 ms-u-lg10 ms-u-xl10 ms-u-xxl10">
                                <a href={"mailto:"+this.props.contactLineData.address} className="emaillink">
                                    {this.props.contactLineData.address}
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case "skype":
                return(
                    <div className='skypeline'>
                        <div className="ms-Grid-row">
                            <div className="contacticon-col ms-Grid-col ms-u-sm2 ms-u-md2 ms-u-lg2 ms-u-xl2 ms-u-xxl2">
                                <a href={"skype:"+this.props.contactLineData.profilename+"?chat"}>
                                    <i className={"ms-Icon ms-Icon--" + this.props.contactLineData.icon} aria-hidden='true'/>
                                </a>
                            </div>
                            <div className="contactdata-col ms-Grid-col ms-u-sm10 ms-u-md10 ms-u-lg10 ms-u-xl10 ms-u-xxl10">
                                <a href={"skype:"+this.props.contactLineData.profilename+"?chat"}>
                                    {this.props.contactLineData.profilename}
                                </a>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null
       }
    }
}

export default ContactLine;
