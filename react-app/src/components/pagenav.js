import React, { Component } from 'react';
import './pagenav.css';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class PageNav extends Component {
  render() {
    var pageNavButtons = this.props.pageData.sections.map((sectionData, index)=>
        <div className="pagenav-col ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg4 ms-u-xl4 ms-u-xxl2" key={index}>
            <Link activeClass="active" to={sectionData.id} spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                <PrimaryButton
                    className="pagenav-button"
                    data-automation-id={sectionData.id}
                    text={sectionData.title}
                    iconProps={ { iconName: sectionData.icon } }
                />
            </Link>
        </div>
    );
    return (
        <nav className="pagenav">
            <div className="ms-Grid-row">
                {pageNavButtons}
            </div>
        </nav>
    );
  }
}

export default PageNav;
