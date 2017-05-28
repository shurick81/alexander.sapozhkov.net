import React, { Component } from 'react';
import './stickyheader.css';
import personaImageSmall from '../photos/persona-small.jpg';
import personaImageBig from '../photos/persona-big.jpg';
import PageNav from './pagenav';
import { IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

class StickyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stickedHeader: false,
            scrollTop: 0,
            showHeader: false,
        };
        this.toggleNavClick = this.toggleNavClick.bind(this)
    };
    tick() {
        var stickedHeader=document.body.scrollTop>=this.props.minScroll;
        //var showHeader=document.body.scrollTop<this.state.scrollTop||(this.state.showHeader&&document.body.scrollTop===this.state.scrollTop);
        var showHeader=this.state.showHeader&&document.body.scrollTop===this.state.scrollTop;
        this.setState({
            stickedHeader: stickedHeader,
            showHeader: showHeader,
            scrollTop: document.body.scrollTop
        });
    };
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            300
        );
    };
    toggleNavClick() {
        this.setState({
            showHeader: !this.state.showHeader
        })
    };
    render() {
        var toggleNavIcon=this.state.showHeader?"Cancel":"Waffle"
        if (this.state.stickedHeader)
            return (
                <div className="stickyheader ms-u-fadeIn500">
                    <IconButton
                        className="togglenav"
                        data-automation-id="togglenav"
                        iconProps={ { iconName: toggleNavIcon } }
                        onClick={this.toggleNavClick}
                    />
                    { this.state.showHeader && (
                        <div className="topPanel ms-u-fadeIn200">
                            <figure className="round photo-border">
                                <img src={personaImageSmall} className="photo ms-u-fadeIn200" alt={this.props.pageData.personName}/>
                            </figure>
                            <div className="middleheaderarea">
                                <h1 className="header-title ms-font-xxl">{this.props.pageData.personName}</h1>
                            </div>
                        </div>
                    )}
                    { this.state.showHeader && (
                        <PageNav pageData={this.props.pageData} sticked={true} className="pagenav ms-u-fadeIn200" />
                    )}
                </div>
            );
        else return null;
    }
}

export default StickyHeader;
