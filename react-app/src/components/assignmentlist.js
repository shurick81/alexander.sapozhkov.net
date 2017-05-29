import React, { Component } from 'react';
import './assignmentlist.css';


class AssignmentList extends Component {
    render() {
        var assignments = this.props.assignmentListData.items.map((assignmentData, index)=>
            <div className="projectitem-col ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg4 ms-u-xl3">
                <div className="ms-Grid assignmentitem-grid" key={index}>
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

