import React, { Component } from 'react';
import './backtotopbutton.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;

class BackToTopButton extends Component {
    render() {
        return (
            <div className="backtotopbutton-area">
                <Link activeClass="active" to="topelement" spy={true} smooth={true} offset={50} duration={1000} className="backtotopbutton-link">
                    <PrimaryButton
                        className="backtotop-button"
                        iconProps={ { iconName: "DoubleChevronUp" } }
                    />
                </Link>
            </div>
        );
    }
}

export default BackToTopButton;
