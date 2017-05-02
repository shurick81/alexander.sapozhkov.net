import React, { Component } from 'react';
import './pagenav.css';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

class PageNav extends Component {
  render() {
    var pageNavButtons = this.props.pageData.sections.map((sectionData, index)=>
        <div className="pagenav-col ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg4 ms-u-xl4 ms-u-xxl2" key={index}>
            <PrimaryButton
                className="pagenav-button"
                data-automation-id={sectionData.id}
                text={sectionData.title}
                iconProps={ { iconName: sectionData.icon } }
            />
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
