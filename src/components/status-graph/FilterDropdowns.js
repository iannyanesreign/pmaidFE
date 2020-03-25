import React, { useState, useEffect } from 'react';
import {
    FormSelect,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "shards-react";
import axios from "axios";
import {config} from "../../config";

export default function FilterDropdowns (props) {

    const [projects, setProjects] = useState([]);
    const [epics, setEpics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config.backendUrl}/jira/projects`;
            const result = await axios(
                endpoint,
            );
            setProjects(result.data.map((project) => (project.key)));
        };
        fetchData();
    }, []);

    useEffect(() => {

        let fetchData = async () => {
            const endpoint = `${config.backendUrl}/jira/epics/${props.project}`;
            const result = await axios(
                endpoint,
            );
            setEpics(result.data.map((epic) => (epic.key)));
        };
        fetchData();
    }, [props]);

    const handleProjectChange = (e) => {
        props.setIssuetypes([]);
        props.setEpic('');
        props.setProject(e.target.value);

    };

    const handleEpicChange = (e) => {
        const value = (e.target.value === 'Choose' ? '' : e.target.value);
        props.setEpic(value);
    };
    return(
        <React.Fragment>
            <strong className="text-muted d-block mb-2">Project Filters</strong>
            <InputGroup className="mb-3" >
                <InputGroupAddon type="prepend">
                    <InputGroupText style={{width:'65px'}}>Project</InputGroupText>
                </InputGroupAddon>
                <FormSelect onChange={handleProjectChange}>
                    <option>Choose</option>
                    {projects.map(project => (
                        <option>{project}</option>
                    ))}
                </FormSelect>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroupAddon type="prepend">
                    <InputGroupText style={{width:'65px'}}>Epic</InputGroupText>
                </InputGroupAddon>
                <FormSelect onChange={handleEpicChange}>
                    <option>Choose</option>
                    {epics.map(epic => (
                        <option>{epic}</option>
                    ))}
                </FormSelect>
            </InputGroup>
        </React.Fragment>
    )
}
