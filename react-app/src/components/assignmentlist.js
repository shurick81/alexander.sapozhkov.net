import React, { Component } from 'react';
import './assignmentlist.css';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';


class AssignmentList extends Component {
    constructor(props) {
        super(props);
        var roleFilters = {};
        for (var i in this.props.assignmentListData.roles) {
            var role = this.props.assignmentListData.roles[i];
            roleFilters[role] = true;
        }
        var technologyFilters = {};
        for (var n in this.props.assignmentListData.technologies) {
            var technology = this.props.assignmentListData.technologies[n];
            technologyFilters[technology] = true;
        }
        this.state = {
            featuredOnly: true,
            scrollTop: 0,
            showHeader: false,
            roleFilters: roleFilters,
            technologyFilters: technologyFilters
        };
    };
    render() {
        var roleFilterControls = this.props.assignmentListData.roles.map((role, index)=>  
            <div className="rolefilter-col ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg3 ms-u-xl2" key={index}>
                <Checkbox
                    label={role}
                    checked={ this.state.roleFilters[role] }
                    onChange={ (ev, checked) => {
                        var newroleFilters = {};
                        for (var key in this.state.roleFilters)
                        {
                            newroleFilters[key] = key===role ? checked : this.state.roleFilters[key]
                        }
                        this.setState({ roleFilters: newroleFilters })
                    }}
                    />
            </div>
        );
        var technologyFilterControls = this.props.assignmentListData.technologies.map((technology, index)=>  
            <div className="technologyfilter-col ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg3 ms-u-xl2" key={index}>
                <Checkbox
                    label={technology}
                    checked={ this.state.technologyFilters[technology] }
                    onChange={ (ev, checked) => {
                        var newtechnologyFilters = {};
                        for (var key in this.state.technologyFilters)
                        {
                            newtechnologyFilters[key] = key===technology ? checked : this.state.technologyFilters[key]
                        }
                        this.setState({ technologyFilters: newtechnologyFilters })
                    }}
                    />
            </div>
        );
        var filteredAssignmentListDataItems = this.props.assignmentListData.items;
        if (this.state.featuredOnly) filteredAssignmentListDataItems = filteredAssignmentListDataItems.filter(function (item) {
            return (item.featured === "true")
        });
        var roleFiltersState = this.state.roleFilters;
        filteredAssignmentListDataItems = filteredAssignmentListDataItems.filter(function (item){
            var display = false;
            for (var role in roleFiltersState)
            {
                if ( roleFiltersState[role] && item.roles.indexOf(role) >= 0 ) display = true;
            }
            return display;
        });
        var technologyFiltersState = this.state.technologyFilters;
        filteredAssignmentListDataItems = filteredAssignmentListDataItems.filter(function (item){
            var display = false;
            for (var technology in technologyFiltersState)
            {
                if ( technologyFiltersState[technology] && item.technologies.indexOf(technology) >= 0 ) display = true;
            }
            return display;
        });
        var assignments = filteredAssignmentListDataItems.map((assignmentData, index)=>
            <div className="projectitem-col ms-Grid-col ms-u-sm12 ms-u-lg6 ms-u-xl4 ms-u-xxl3 ms-u-fadeIn500" key={index}>
                <div className="ms-Grid assignmentitem-grid">
                    <div className="ms-Grid-row">
                        <h4 className="assignmenttitle-col assignmentvalue-col ms-Grid-col ms-fontWeight-semibold ms-u-sm12">
                            {assignmentData.title}
                        </h4>
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
                        label={ this.props.assignmentListData.featuredFilterText }
                        onChanged={(checked) => {this.setState({featuredOnly: checked})}}
                        />
                    <div className="rolefilter-area">
                        <h3>{
                            this.props.assignmentListData.roleFiltersHeaderText }
                        </h3>
                        <div className="ms-Grid rolefilter-grid">
                            <div className="ms-Grid-row">
                                {roleFilterControls}
                            </div>
                        </div>
                    </div>
                    <div className="technologyfilter-area">
                        <h3>
                            { this.props.assignmentListData.technologyFiltersHeaderText }
                        </h3>
                        <div className="ms-Grid technologyfilter-grid">
                            <div className="ms-Grid-row">
                                {technologyFilterControls}
                            </div>
                        </div>
                    </div>
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

