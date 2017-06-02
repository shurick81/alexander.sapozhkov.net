import React, { Component } from 'react';
import './pagenav.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import Scroll from 'react-scroll';
import MediaQuery from 'react-responsive';

var Link       = Scroll.Link;

class PageNav extends Component {
    render() {
        var pageNavColSmClass = !this.props.sticked?"6":"12";
        var pageNavColMdClass = !this.props.sticked?"6":"12";
        var pageNavColLgClass = !this.props.sticked?"4":"12";
        var pageNavColXlClass = !this.props.sticked?"4":"2";
        var pageNavColXxlClass = !this.props.sticked?"4":"2";
        var pageNavButtons = this.props.pageData.sections.map((sectionData, index)=>
            <div className={`pagenav-col ms-Grid-col ms-u-sm${pageNavColSmClass} ms-u-md${pageNavColMdClass} ms-u-lg${pageNavColLgClass} ms-u-xl${pageNavColXlClass} ms-u-xxl${pageNavColXxlClass}`} key={index}>
                <Link activeClass="active" to={sectionData.id} spy={true} smooth={true} offset={50} duration={500}>
                    <PrimaryButton
                        className="pagenav-button"
                        text={sectionData.title}
                        iconProps={ { iconName: sectionData.icon } }
                    />
                </Link>
            </div>
        );
        var shortPageNavButtons = this.props.pageData.sections.map((sectionData, index)=>
            <div className={`pagenav-col ms-Grid-col ms-u-sm${pageNavColSmClass} ms-u-md${pageNavColMdClass} ms-u-lg${pageNavColLgClass} ms-u-xl${pageNavColXlClass} ms-u-xxl${pageNavColXxlClass}`} key={index}>
                <Link activeClass="active" to={sectionData.id} spy={true} smooth={true} offset={50} duration={500}>
                    <PrimaryButton
                        className="pagenav-button"
                        iconProps={ { iconName: sectionData.icon } }
                    />
                </Link>
            </div>
        );
        if (!this.props.sticked)
        return (
            <nav className={this.props.className}>
                <div className="ms-Grid-row">
                    {pageNavButtons}
                </div>
            </nav>
        ); else return (
            <nav className={this.props.className}>
                <MediaQuery query='(max-width: 1023px)'>
                    <div className="ms-Grid nav-grid">
                        <div className="ms-Grid-row">
                            {shortPageNavButtons}
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query='(min-width: 1024px)'>
                    <MediaQuery query='(max-width: 1889px)'>
                        {shortPageNavButtons}
                    </MediaQuery>
                    <MediaQuery query='(min-width: 1890px)'>
                        {pageNavButtons}
                    </MediaQuery>
                </MediaQuery>
            </nav>
        );
    }
}

export default PageNav;
