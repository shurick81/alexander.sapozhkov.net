import React, { Component } from 'react';

import './App.css';
import PageHeader from './components/header';
import Section from './components/section';
import StickyHeader from './components/stickyheader';
import BackToTopButton from './components/backtotopbutton';
import Scroll from 'react-scroll';
import pagedata from './pagedata.json';

var Element    = Scroll.Element;

class App extends Component {

  render() {
    var sectionsData = pagedata.sections;
    var sections = sectionsData.map((sectionData, index)=>
      <Section sectionData={sectionData} key={index} />
    );
    return (
      <div ref="appwrapper" className="ms-font-m-plus ms-u-textAlignCenter app-wrapper" >
        <Element name="topelement" />
        <PageHeader pageData={pagedata} />
        <div ref="pagebody" className="pageBody">
          {sections}
        </div>
        <StickyHeader pageData={pagedata} minScroll={930} />
        <BackToTopButton/>
      </div>
    );
  }
}

export default App;
