import React from "react";
import {
    Container, Button, Row, Col
} from '../../components'

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { HeaderMain } from "../Contest/BasicContest/Components/HeaderMain/HeaderMain";

import SearchBar from "./Components/SeacrhBar";
import Tags from "./Components/Tags"
import QuestionDataTable from './Components/QuestionDataTable'

const DivStyle = {
    height: "40px",
    fontSize: "1rem"
}

const QuestionBank = () => {

    return (
        <Container>
            <div className="d-flex justify-content-between" >
                <HeaderMain
                    title="All Question Bank"
                    className="mb-5 mt-4"
                />
                <Link to="/create-test">
                    <Button style={DivStyle} className="mb-2 mt-5" color="primary">Create New </Button>
                </Link>
            </div>
            <div className="d-flex justify-content-center mb-3 mt-5 ml-5">
                <SearchBar />
            </div>

            {/* Contest Table Data */}
            <Row>
                <Col lg={3}>
                    <Tags />
                </Col>
                <Col lg={9}>
                    <QuestionDataTable />
                </Col>
            </Row>
        </Container>
    )

}

export default QuestionBank;