import React, { Component } from 'react';
import './contentitem.css';
var Carousel = require('react-responsive-carousel').Carousel;
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';

class ContentItem extends Component {
    imageLayout(imgUrl, fullImgUrl, imgAlt)
    {
        if (imgUrl!=null)
        {
            var imgScr=require('../photos/'+imgUrl)
            if (fullImgUrl!=null)
            return (
                <a
                    onClick={ this.props.onThumbClick }
                    className="contentitem-imagelink">
                    <img className="contentitem-image" src={imgScr} alt={imgAlt} />
                </a>
            ); else return (
                <img className="contentitem-image" src={imgScr} alt={imgAlt} />
            );
        } else return null;
    }
    plainTextLayout(txt, className)
    {
        if (txt!=null)
        {
            return (
                <div className={className} dangerouslySetInnerHTML={{__html: txt}} />
            );
        } else return null;
    }
    exampleLayout(txt, expanded, index)
    {
        if (txt!=null)
        {
            var newIndex = !expanded ? index : -1;
            var buttonIcon = !expanded ? "ChevronDown" : "ChevronUp";
            var exampleButtonOnclick = !expanded ? this.props.onShowExampleButtonClick : this.props.onHideExampleButtonClick;
            return (
                <div className="slide-example">
                    <div className='examplebuttonarea' ref={ (exampleButton) => {
                            if (typeof(this.examplerefs) == "undefined" )
                            {
                                this.examplerefs={};
                            }
                            this.examplerefs[index] = exampleButton;
                        } }
                        >
                        <div className="exampletext" dangerouslySetInnerHTML={{__html: txt}} />
                        <PrimaryButton
                            className="examplebutton"
                            text="Example"
                            iconProps={ { iconName: buttonIcon } }
                            onClick={ exampleButtonOnclick }
                        />
                    </div>
                    {
                        expanded===314 && (
                            <div className="exampletextpositioner ms-u-fadeIn500">
                                <div className="exampletext" dangerouslySetInnerHTML={{__html: txt}} />
                            </div>
                        )
                    }
                    {
                        expanded && (
                            <Callout
                                className="examplecallout"
                                onDismiss={ this.props.onHideExampleButtonClick }
                                targetElement={ this.examplerefs[index] }
                                directionalHint={ DirectionalHint.bottomCenter }
                                gapSpace={ 0 }
                                >
                                <div className="exampletext" dangerouslySetInnerHTML={{__html: txt}} />
                            </Callout>
                        )
                    }
                </div>
            );
        } else return null;
    }
    render() {
        return (
            <div className="contentitem">
                <h4 className="slide-header ms-font-m-plus ms-fontWeight-semibold">{this.props.contentItemData.title}</h4>
                {this.imageLayout(this.props.contentItemData.image,this.props.contentItemData.fullImage,this.props.contentItemData.title)}
                {this.plainTextLayout(this.props.contentItemData.text,"slide-plaintext")}
                {this.exampleLayout(this.props.contentItemData.example, this.props.expandedExample, this.props.parentIndex)}
            </div>
        );
    }
}

export default ContentItem;
