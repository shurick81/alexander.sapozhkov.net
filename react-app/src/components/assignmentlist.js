import React, { Component } from 'react';
import './assignmentlist.css';


class AssignmentList extends Component {
    render() {
        var assignments = this.props.assignmentListData.items.map((assignmentData, index)=>
            <div className="ms-Grid assignmentitem-grid" key={index}>
                <div className="ms-Grid-row">
                    <div className="assignmentdateslabel-col assignmentlabel-col ms-Grid-col ms-u-sm6">
                        Dates
                    </div>
                    <div className="assignmentdates-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                        {assignmentData.beginning} - {assignmentData.ending}
                    </div>
                    <div className="assignmentlogo-col assignmentvalue-col ms-Grid-col ms-u-sm12">
                        <img src={require('../photos/'+assignmentData.clientLogo)} className="assignmentlogo" alt={assignmentData.title}/>
                    </div>
                    <div className="assignmenttitle-col assignmentvalue-col ms-Grid-col ms-fontWeight-semibold ms-u-sm12">
                        {assignmentData.title}
                    </div>
                </div>
            </div>
        );
        return(
            <div className="assignmentlistwrapper">
                {assignments}
            </div>
        );
    }
}

export default AssignmentList;

