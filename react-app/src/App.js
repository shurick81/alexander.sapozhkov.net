import React, { Component } from 'react';
import './App.css';
import PageHeader from './components/header';
import IntroSection from './components/introsection';
import Section from './components/section';
import pagedata from './pagedata.json';


class App extends Component {
  render() {
    var sectionsData = pagedata.sections;
    var introSectionsData = sectionsData.filter(section => { return section.id === "intro"});
    var introSections = introSectionsData.map((sectionData, index)=>
      <IntroSection sectionData={sectionData} key={index} />
    );
    var architectSectionsData = sectionsData.filter(section => { return section.id === "architect"});
    var architectSections = architectSectionsData.map((sectionData, index)=>
      <Section sectionData={sectionData} key={index} />
    );
  
    return (
      <div ref="appwrapper" className="ms-font-m-plus app-wrapper" >
        <div className="headerWrapper">
          <PageHeader pageData={pagedata} />
        </div>
        <div ref="pagebody" className="pageBody">
          {introSections}
          {architectSections}
        </div>
      </div>
    );
  }
}

export default App;
