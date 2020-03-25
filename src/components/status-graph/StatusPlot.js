import React, { useState, useEffect } from 'react';
import axios from "axios";

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries,
    Crosshair,
    DiscreteColorLegend,
} from 'react-vis';
import {Card, CardBody, CardHeader, Col, Row} from "shards-react";
import {config} from "../../config";


export default function StatusPlot(props) {

    const [data, setData] = useState([]);
    const [crosshairValues, setCrosshairValues] = useState([]);
    const [crosshairItems, setCrosshairItems] = useState([]);
    useEffect(() => {
        const endpoint = `${config.backendUrl}/jira/status-graph?projectkey=${props.project}${props.issuetypes.map(item => ('&issuetype='+item)).join('')}&epickey=${props.epic}`;
        console.log(endpoint);
        const fetchData = async () => {
            const result = await axios(
                endpoint
            );
            await setData(result.data);
        };
        fetchData();
    }, [props]);

    /**
     * Event handler for onMouseLeave.
     * @private
     */
    const onMouseLeave = () => {
        setCrosshairValues([]);
    };

    /**
     * Event handler for onNearestX.
     * @param {Object} value Selected value.
     * @param {index} index Index of the value in the data array.
     * @private
     */
    const onNearestX = (value, {index}) => {
        setCrosshairValues(data.map(d => d.values[index]));
        setCrosshairItems(data.map(d => ({title: d.name, value: d.values[index].y})));
        console.log(crosshairItems);
    };


    return (
        <React.Fragment>
            <Card small className="h-100">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Status counts</h6>
                </CardHeader>
                <CardBody className="pt-0">
                    <Row className="border-bottom py-2 bg-light">
                        <Col lg="10" md="12" sm="12" className="mb-4" style={{overflow: 'auto', whiteSpace: 'nowrap',overflowY: 'auto'}}>
                            <XYPlot  onMouseLeave={onMouseLeave} xType="ordinal" width={2000} height={400}>
                                <VerticalGridLines />
                                <HorizontalGridLines />
                                <XAxis title="Dia"/>
                                <YAxis />
                                {data.map(item => (
                                    <LineMarkSeries className="fade-in" onNearestX={onNearestX} data={item.values} size={5}/>
                                ))}
                                <Crosshair
                                    values={crosshairValues}
                                    className={'test-class-name'}
                                    itemsFormat={() => (crosshairItems)}
                                />
                            </XYPlot>
                        </Col>
                        <Col lg="2" md="12" sm="12" className="mb-4" >
                            <DiscreteColorLegend height={400} width={300} items={data.map(item => (item.name))}/>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>

    );
}

