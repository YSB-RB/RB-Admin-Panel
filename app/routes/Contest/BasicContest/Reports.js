import React, { useState } from "react"

import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Table,
    CardFooter
} from '../../../components';

import { TrTableDefault } from "./Components/TrTableDefault";
import Paginations from "../BasicContest/Components/Paginations/Paginations"


export const Reports = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Card className="mb-3">
                            <CardBody>
                                <Table className="mb-0" bordered responsive>
                                    <thead>
                                        <tr>
                                            <th>Participant Name</th>
                                            <th>Image</th>
                                            <th>No of Assest Uploaded</th>
                                            <th>Last Upload</th>
                                            <th>Size</th>
                                            <th className="text-right">
                                                Actions
                                            </th>
                                            <th>Ratings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TrTableDefault />
                                    </tbody>
                                </Table>

                            </CardBody>

                            <CardFooter className="d-flex justify-content-center pb-0">
                                <Paginations />
                            </CardFooter>

                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}