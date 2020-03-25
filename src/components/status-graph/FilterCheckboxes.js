import React, { useState, useEffect } from 'react';
import {
    FormCheckbox,
} from "shards-react";
import axios from "axios";
import {config} from "../../config";

export default function FilterCheckboxes (props) {

    const [workflowDisplay, setWorkflowDisplay] = useState([]);
    const [workflows, setWorkflows] = useState([]);
    const [checkFilter, setCheckFilter] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config.backendUrl}/jira/issuetypes/${props.project}`;
            const result = await axios(
                endpoint,
            );
            setWorkflows(result.data);
            let checkFilters = {};
            for (const workflow of result.data){
                for(const issuetype of workflow){
                    checkFilters[issuetype.name] = false;
                }
            }
            setCheckFilter(checkFilters);
        };
        fetchData();
    }, [props.project]);

    const handleChange = (event) => {
        const workflowIndex = event.target.getAttribute('index');
        let tempFilter = Object.assign({}, checkFilter);
        let issuetypesArray = props.issuetypes.slice();

        for(let i = 0; i< workflows.length; i++){
            if (i != workflowIndex){
                for(const issuetype of workflows[i]){
                    const index = issuetypesArray.indexOf(issuetype.name);
                    if (index > -1) {
                        issuetypesArray.splice(index, 1);
                    }
                    tempFilter[issuetype.name] = false;
                }
            }
        }
        tempFilter[event.target.name] = !tempFilter[event.target.name];

        if(tempFilter[event.target.name] === false){
            const index = issuetypesArray.indexOf(event.target.name);
            if (index > -1) {
                issuetypesArray.splice(index, 1);
            }
        }else{
            issuetypesArray.push(event.target.name);
        }
        console.log(issuetypesArray);
        props.setIssuetypes(issuetypesArray);
        setCheckFilter(tempFilter);
    };

    useEffect(() => {
        const workflowRows = [];
        for (const workflow of workflows){
            let workflowArray = workflow.map(issuetype => (<FormCheckbox onClick={handleChange} name={issuetype.name} index={issuetype.workflowIndex} checked ={checkFilter[issuetype.name]}>{issuetype.name}</FormCheckbox>));
            workflowArray.push(<hr/>);
            workflowRows.push(workflowArray);
        }
        setWorkflowDisplay(workflowRows);
    },[checkFilter]);



    return(
        <React.Fragment>
            <strong className="text-muted d-block mb-2">Checkboxes</strong>
            <fieldset>
                {workflowDisplay}
            </fieldset>
        </React.Fragment>
    )
}
