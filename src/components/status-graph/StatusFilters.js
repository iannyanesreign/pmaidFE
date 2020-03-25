import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row
} from "shards-react";
import FilterCheckboxes from "./FilterCheckboxes";
import FilterDropdowns from "./FilterDropdowns";

export default function StatusFilters(props){
    return(
        <React.Fragment>
            <Card small className="h-100">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Status Filters</h6>
                </CardHeader>
                <CardBody className="pt-0">
                    <Row className="border-bottom py-2 bg-light">
                        <Col lg="6" md="12" sm="12" className="mb-4">
                            <FilterDropdowns epic = {props.epic} setEpic = {props.setEpic} setProject={props.setProject} project = {props.project} issuetypes = {props.issuetypes} setIssuetypes={props.setIssuetypes} />
                        </Col>
                        <Col lg="6" md="12" sm="12" className="mb-4">
                            <FilterCheckboxes project={props.project} setIssuetypes = {props.setIssuetypes} issuetypes={props.issuetypes} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}
