import React from "react";
import {
    Container, Button, Row, Col
} from '../../../../../components'
import { HeaderMain } from "../HeaderMain/HeaderMain";
import SearchBar from "./SearchBar";
import Tags from "./Tags";
import ListTable from "./ListTable";




const DivStyle = {
    height: "40px",
    fontSize: "1rem"
}

const AllContest = () => {
    // const HandleAddContest = () => {
    //     alert("New Create Contest Page Will be Open")
    // }
    return (
        <Container>
            <div className="d-flex justify-content-between" >
                <HeaderMain
                    title="All Contest"
                    className="mb-2 mt-5"
                />
                    <Button style={DivStyle} className="mb-2 mt-5" color="primary">Create New </Button>
            </div>

            <div className="d-flex justify-content-center mb-3 mt-4">
                <SearchBar />
            </div>

            {/* Contest Table Data */}
            <Row>
                <Col lg={3}>
                    <Tags />
                </Col>
                <Col lg={9}>
                    <ListTable />
                </Col>
            </Row>
        </Container>
    )

}

export default AllContest;