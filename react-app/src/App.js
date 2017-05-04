import React, { Component } from 'react';
import './App.css';
import PageHeader from './components/header';
import IntroSection from './components/introsection';
import Section from './components/section';
import pagedata from './pagedata.json';

class App extends Component {

  render() {
    var sectionsData = pagedata.sections;
    var sections = sectionsData.map((sectionData, index)=>
      <Section sectionData={sectionData} key={index} />
    );
    return (
      <div ref="appwrapper" className="ms-font-m-plus app-wrapper" >
        <PageHeader pageData={pagedata} />
        <div ref="pagebody" className="pageBody">
          {sections}
        </div>
      </div>
    );
  }
}

export default App;
