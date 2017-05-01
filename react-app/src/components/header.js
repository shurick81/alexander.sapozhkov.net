import React, { Component } from 'react';
import './header.css';
import personaImageSmall from '../photos/persona-small.jpg';
import personaImageBig from '../photos/persona-big.jpg';
import MediaQuery from 'react-responsive';
import PageNav from './pagenav';

class PageHeader extends Component {
  render() {
    return (
        <header className="header">
            <div className="header-toparea">
                <figure className="photo-border">
                    <MediaQuery query='(max-width: 650px)'>
                        <img src={personaImageSmall} className="photo" alt={this.props.pageData.personName}/>
                    </MediaQuery>
                    <MediaQuery query='(min-width: 651px)'>
                        <img src={personaImageBig} className="photo" alt={this.props.pageData.personName}/>
                    </MediaQuery>
                </figure>
                <h1 className="header-title ms-font-xxl">{this.props.personName}</h1>
                <div className="header-person-anouncement ms-font-xl">{this.props.pageData.personAnouncement}</div>
                <div className="header-person-smalltext ms-font-xl">{this.props.pageData.smallText}</div>
            </div>
            <PageNav pageData={this.props.pageData}/>
        </header>
    );
  }
}

export default PageHeader;
