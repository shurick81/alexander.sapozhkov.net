import React, { Component } from 'react';
import './header.css';
import personaImageSmall from '../photos/persona-small.jpg';
import personaImageBig from '../photos/persona-big.jpg';
import MediaQuery from 'react-responsive';
import PageNav from './pagenav';
import { IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

class PageHeader extends Component {
    render() {
        var titleImage=require('../photos/'+this.props.pageData.titleImage);
        return (
            <header className="header pagewidthlimitedncentered width-padding">
                <h1 className="header-title ms-font-xxl ms-fontWeight-semibold">{this.props.pageData.personName}</h1>
                <div className="mainheaderarea">
                    <div className="background">
                        <div className="header-grid ms-Grid-row">
                            <div className="photo-col ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg6 ms-u-xl6">
                                <figure className="photo-border round">
                                    <MediaQuery query='(max-width: 640px)'>
                                        <img src={personaImageSmall} className="photo" alt={this.props.pageData.personName}/>
                                    </MediaQuery>
                                    <MediaQuery query='(min-width: 641px)'>
                                        <img src={personaImageBig} className="photo" alt={this.props.pageData.personName}/>
                                    </MediaQuery>
                                </figure>
                            </div>
                            <div className="title-col ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg6 ms-u-xl6">
                                <img src={titleImage} className="titleimage" alt={this.props.pageData.personName}/>
                            </div>
                        </div>
                    </div>
                </div>
                <PageNav pageData={this.props.pageData} sticked={false} className="pagenav" />
            </header>
        );
    }
}

export default PageHeader;
