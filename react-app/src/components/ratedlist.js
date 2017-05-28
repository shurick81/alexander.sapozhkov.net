import React, { Component } from 'react';
import './ratedlist.css';
import Rating from 'react-rating';


class RatedList extends Component {
    render() {
        var ratedItems = this.props.listData.items.map((ratedItemData, index)=>
            <div className="ms-Grid-row" key={index}>
                <div className="itemlabel-col ms-Grid-col ms-u-sm8 ms-u-md8 ms-u-lg8 ms-u-xl8 ms-u-xxl6">
                    {ratedItemData.title}
                </div>
                <div className="itemrating-col ms-Grid-col ms-u-sm4 ms-u-md4 ms-u-lg4 ms-u-xl4 ms-u-xxl6">
                    <Rating empty="fa fa-star-o" full="fa fa-star" initialRate={ratedItemData.rating/this.props.listData.maximumRating*5} readonly />
                </div>
            </div>
        );
        return(
            <div className="listwrapper">
                <h3 className="contentlist-header ms-font-xl">{this.props.listData.label}</h3>
                {ratedItems}
            </div>
        );
    }
}

export default RatedList;

