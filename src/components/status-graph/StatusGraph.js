import React, { useState, useEffect } from 'react';
import {Col, Row} from "shards-react";
import StatusFilters from "./StatusFilters";
import StatusPlot from "./StatusPlot";

export default function StatusGraph(){

    const [project,setProject] = useState('');
    const [issuetypes, setIssuetypes] = useState([]);
    const [epic, setEpic] = useState('');

    useEffect( () => {
       console.log(issuetypes);
    });

    return (
        <React.Fragment>
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-4">
                    <StatusFilters project={project} setProject={setProject} issuetypes={issuetypes}  setIssuetypes={setIssuetypes} epic = {epic} setEpic={setEpic}/>
                </Col>
            </Row>
            <Row>
                <Col lg="12" md="12" sm="12" className="mb-4">
                    <StatusPlot project={project} setProject={setProject} issuetypes={issuetypes}  setIssuetypes={setIssuetypes} epic = {epic}/>
                </Col>
            </Row>
        </React.Fragment>
    )
}
