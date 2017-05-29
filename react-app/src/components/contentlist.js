import React, { Component } from 'react';
import './contentlist.css';
var Carousel = require('react-responsive-carousel').Carousel;
import 'react-responsive-carousel/lib/styles/carousel.css';
import MediaQuery from 'react-responsive';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import ContentItem from './contentitem';
import TestComponent from './testcomponent';

class ContentList extends Component {
    constructor() {
        super();
        this.state = {
            fullScreenImage: {
                expand: false,
                fullScreenImageUrl: "",
                fullScreenTitle: ""
            },
            displayedExample: {
                index: -1
            },
            selectedIndex: 0
        };
    }
    onShowExampleButtonClick(index)
    {
        this.setState( { displayedExample: { index: index }, selectedIndex: index } )
    }
    onHideExampleButtonClick(index)
    {
        this.setState( { displayedExample: { index: -1 }, selectedIndex: index } )
    }
    onThumbClick(fullScreenImageUrl, fullScreenTitle)
    {
        this.setState( { fullScreenImage: {expand:true, fullScreenImageUrl: fullScreenImageUrl, fullScreenTitle: fullScreenTitle } } )
    }
    render() {
        var contentSlideItems=this.props.contentListData.contentItems.map((contentItemData, index)=>
            <div className="text-slide" key={index}>
                <ContentItem
                    contentItemData={contentItemData}
                    parentIndex={index}
                    expandedExample={ index == this.state.displayedExample.index }
                    onShowExampleButtonClick={() => this.onShowExampleButtonClick(index)}
                    onHideExampleButtonClick={() => this.onHideExampleButtonClick(index)}
                    onThumbClick={() => this.onThumbClick(contentItemData.fullImage, contentItemData.title)}
                    />
            </div>
        );
        var contentGridItems=this.props.contentListData.contentItems.map((contentItemData, index)=>
            <div className="contentitem-col ms-Grid-col ms-u-sm6 ms-u-md6 ms-u-lg6 ms-u-xl4 ms-u-xxl3" key={index}>
                <ContentItem
                    contentItemData={contentItemData}
                    parentIndex={index}
                    expandedExample={ index == this.state.displayedExample.index }
                    onShowExampleButtonClick={() => this.onShowExampleButtonClick(index)}
                    onHideExampleButtonClick={() => this.onHideExampleButtonClick(index)}
                    onThumbClick={() => this.onThumbClick(contentItemData.fullImage, contentItemData.title)}
                    />
            </div>
        );
        var fullScreenImgSrc=null;
        if (this.state.fullScreenImage.expand)
        {
            fullScreenImgSrc=require('../photos/'+this.state.fullScreenImage.fullScreenImageUrl);
        }
        return (
            <div className="contentlist">
                <h3 className="contentlist-header ms-font-xl">{this.props.contentListData.label}</h3>
                <MediaQuery query='(max-width: 639px)'>
                    <Carousel axis="horizontal" selectedItem={this.state.selectedIndex} onChange={(index) => this.onHideExampleButtonClick(index)} showThumbs={false} showStatus={false} infiniteLoop={true} className="carouselblock">
                        {contentSlideItems}
                    </Carousel>
                </MediaQuery>
                <MediaQuery query='(min-width: 640px)'>
                    <div className="contentlist-grid ms-Grid">
                        <div className="ms-Grid-row">
                            {contentGridItems}
                        </div>
                    </div>
                </MediaQuery>
                <Panel
                    isOpen={ this.state.fullScreenImage.expand }
                    type={ PanelType.smallFluid }
                    onDismiss={ () => this.setState({ fullScreenImage: false }) }
                    headerText={this.state.fullScreenImage.fullScreenTitle}
                    className="contentlistpanel"
                >
                    <a className="fullscreenimagelink" onClick={ () => this.setState( { fullScreenImage: { expand: false } } ) }>
                        <img className="fullscreenimage" src={fullScreenImgSrc} alt={this.state.fullScreenImage.fullScreenTitle} />
                    </a>
                </Panel>
            </div>
        );
    }
}

export default ContentList;
