import React, { Component } from 'react';
import './App.css';
import PageHeader from './components/header';
import IntroSection from './components/introsection';
import Section from './components/section';
import pagedata from './pagedata.json';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {appTop: 0};
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };
  handleScroll() {
    //var elementBounds = ReactDOM.findDOMNode("appwrapper").getBoundingClientRect();
    //refs.pagebody.getDOMNode().getBoundingClientRect();
    this.setState({appTop: 1})
    // window.scrollY
  };
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
      <div ref="appwrapper" className="ms-font-m-plus app-wrapper">
        <div className="headerWrapper">
          <PageHeader pageData={pagedata} />
        </div>
        {this.state.appTop}
        <div ref="pagebody" className="pageBody">
          {introSections}
          {architectSections}
        </div>
      </div>
    );
  }
}

export default App;
