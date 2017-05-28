import React, { Component } from 'react';

import './App.css';
import PageHeader from './components/header';
import Section from './components/section';
import StickyHeader from './components/stickyheader';
import pagedata from './pagedata.json';


class App extends Component {

  render() {
    var sectionsData = pagedata.sections;
    var sections = sectionsData.map((sectionData, index)=>
      <Section sectionData={sectionData} key={index} />
    );
    return (
      <div ref="appwrapper" className="ms-font-m-plus ms-u-textAlignCenter app-wrapper" >
        <PageHeader pageData={pagedata} />
        <div ref="pagebody" className="pageBody">
          {sections}
        </div>
        <StickyHeader pageData={pagedata} minScroll={930} />
      </div>
    );
  }
}

export default App;
