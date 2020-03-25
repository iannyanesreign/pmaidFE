import React from "react";
import { Container, Row } from "shards-react";
import '../../node_modules/react-vis/dist/style.css';


import PageTitle from "./../components/common/PageTitle";
import StatusGraph from "../components/status-graph/StatusGraph";


const MetricsEvolution = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Metrics Evolution" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>
    <StatusGraph/>
  </Container>
);

export default MetricsEvolution;
