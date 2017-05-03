import React, { Component } from 'react';
import './introsection.css';
import Section from './section';
var Carousel = require('react-responsive-carousel').Carousel;
import 'react-responsive-carousel/lib/styles/carousel.css';

class IntroSection extends Component {
  render() {
    var assets = this.props.sectionData.keyAssetsControl.assetList.map((keyAssetData, index)=>
        <div className="text-slide" key={index}>
            <h4 className="slide-header ms-font-m-plus ms-fontWeight-semibold">{keyAssetData.title}</h4>
            <div className="slide-plaintext">{keyAssetData.text}</div>
        </div>
    );
    return (
        <Section sectionData={this.props.sectionData} className="intro-section">
            <h3 className="carousel-header ms-font-l">{this.props.sectionData.keyAssetsControl.label}</h3>
            <Carousel axis="horizontal" showThumbs={false} showStatus={false} infiniteLoop={true}>
                {assets}
            </Carousel>
        </Section>
    );
  }
}

export default IntroSection;
