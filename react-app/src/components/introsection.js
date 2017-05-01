import React, { Component } from 'react';
import './introsection.css';
import SectionTitle from './sectionTitle';
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
        <section className="section intro-section">
            <SectionTitle
                backgroundImage={this.props.sectionData.moodPhoto}
                displayTitle={this.props.sectionData.title}
                anouncement={this.props.sectionData.anouncement}
                icon={this.props.sectionData.icon}
            />
            <div className="section-body">
                <h3 className="carousel-header ms-font-l">{this.props.sectionData.keyAssetsControl.label}</h3>
                <Carousel axis="horizontal" showThumbs={false} showStatus={false} infiniteLoop={true}>
                    {assets}
                </Carousel>
            </div>
        </section>
    );
  }
}

export default IntroSection;
