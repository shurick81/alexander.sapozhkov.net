import React, { Component } from 'react';
import './header.css';
import personaImageSmall from '../photos/persona-small.jpg';
import personaImageBig from '../photos/persona-big.jpg';
import MediaQuery from 'react-responsive';
import PageNav from './pagenav';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {appTop: 0};
  }
  tick() {
    this.setState({scrollTop: document.body.scrollTop});
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }
  render() {
    return (
        <header className="header">
            <div className="header-grid ms-Grid-row">
                <div className="photo-col ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12 ms-u-xl4">
                    <figure className="photo-border">
                        <MediaQuery query='(max-width: 650px)'>
                            <img src={personaImageSmall} className="photo" alt={this.props.pageData.personName}/>
                        </MediaQuery>
                        <MediaQuery query='(min-width: 651px)'>
                            <img src={personaImageBig} className="photo" alt={this.props.pageData.personName}/>
                        </MediaQuery>
                    </figure>
                </div>
                <div className="header-anouncearea ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12 ms-u-xl8">
                    <h1 className="header-title ms-font-xxl">{this.props.personName}</h1>
                    <div className="header-person-anouncement ms-font-xl">{this.props.pageData.personAnouncement}</div>
                    <div className="header-person-smalltext ms-font-xl">{this.props.pageData.smallText}</div>
                </div>
                <div className="nav-col ms-Grid-col ms-u-sm12">
                    <PageNav pageData={this.props.pageData}/>
                </div>
            </div>
        </header>
    );
  }
}

export default PageHeader;
