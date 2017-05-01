import React, { Component } from 'react';
import './App.css';
import PageHeader from './components/header';
import IntroSection from './components/introsection';
import pagedata from './pagedata.json';


class App extends Component {
  render() {
    var sectionsData = pagedata.sections;
    var introSectionsData = sectionsData.filter(section => { return section.id === "intro"});
    var introsections = introSectionsData.map((sectionData, index)=>
      <IntroSection sectionData={sectionData} key={index} />
    );
    return (
      <div className="ms-font-m-plus app-wrapper">
        <PageHeader pageData={pagedata} />
        {introsections}
      </div>
    );
  }
}

export default App;
