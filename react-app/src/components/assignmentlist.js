import React, { Component } from 'react';
import './assignmentlist.css';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';


class AssignmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredOnly: true,
            scrollTop: 0,
            showHeader: false,
        };
    };
    render() {
        var filteredAssignmentListDataItems = this.props.assignmentListData.items
        if (this.state.featuredOnly) filteredAssignmentListDataItems = filteredAssignmentListDataItems.filter(function (item) {
            return (item.featured === "true")
            });
        var assignments = filteredAssignmentListDataItems.map((assignmentData, index)=>
            <div className="projectitem-col ms-Grid-col ms-u-sm12 ms-u-lg6 ms-u-xl4 ms-u-xxl3 ms-u-fadeIn500" key={index}>
                <div className="ms-Grid assignmentitem-grid">
                    <div className="ms-Grid-row">
                        <div className="assignmenttitle-col assignmentvalue-col ms-Grid-col ms-fontWeight-semibold ms-u-sm12">
                            {assignmentData.title}
                        </div>
                        <div className="assignmentlogo-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                            <img src={require('../photos/'+assignmentData.clientLogo)} className="assignmentlogo" alt={assignmentData.title}/>
                        </div>
                        <div className="assignmentdateslabel-col assignmentlabel-col ms-Grid-col ms-u-sm6">
                            Dates
                        </div>
                        <div className="assignmentclient-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                            <i className="ms-Icon ms-Icon--Suitcase" aria-hidden="true"></i> {assignmentData.client}
                        </div>
                         <div className="assignmentclient-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                            <i className="ms-Icon ms-Icon--Suitcase" aria-hidden="true"></i> Employer: {assignmentData.employer}
                        </div>
                       <div className="assignmentdates-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                            <i className="ms-Icon ms-Icon--Calendar" aria-hidden="true"></i> {assignmentData.beginning} - {assignmentData.ending}
                        </div>
                        <div className="assignmentroles-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                            <i className="ms-Icon ms-Icon--Contact" aria-hidden="true"></i> {assignmentData.roles.join(", ")}
                        </div>
                        <div className="assignmenttechnologies-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                            <i className="ms-Icon ms-Icon--DeveloperTools" aria-hidden="true"></i> {assignmentData.technologies.join(", ")}
                        </div>
                    </div>
                </div>
            </div>
        );
        return(
            <div className="assignmentlistwrapper">
                <div className="listfilter">
                    <Toggle
                        defaultChecked={ this.state.featuredOnly }
                        label='Show featured projects only'
                        onChanged={(checked) => {this.setState({featuredOnly: checked})}}
                        />
                </div>
                <div className="ms-Grid assignmentlist-grid">
                    <div className="ms-Grid-row">
                        {assignments}
                    </div>
                </div>
            </div>
        );
    }
}

export default AssignmentList;

