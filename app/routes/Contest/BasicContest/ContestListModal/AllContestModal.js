import React from "react";
import {
    Container, Button, Row, Col
} from "../../../../components"

import SearchBar from "./SearchBar";
import ListTable from "./ListTable";

const DivStyle = {
    height: "40px",
    fontSize: "1rem"
}

const AllContestModal = () => {
 
    return (
        <Container>
            <div className="d-flex justify-content-center mb-3 mt-4">
                <SearchBar />
            </div>

            <Row>
                <Col lg={12}>
                    <ListTable />
                </Col>
            </Row>
        </Container>
    )

}

export default AllContestModal;