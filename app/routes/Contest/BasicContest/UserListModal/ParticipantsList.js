import React from 'react';

import {
    Card,
    CardFooter,
    Table,
} from "../../../../components";


import { TrTableParticipants } from './TrTableParticipants';
import Paginations from '../Components/Paginations/Paginations'



const ParticipantsList = () => (
        <Card className="mb-3">
            { /* START Table */}
            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th className="align-middle bt-0">Name</th>
                            <th className="align-middle bt-0">Email</th>
                            <th className="align-middle bt-0 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TrTableParticipants />
                        <TrTableParticipants 
                            id="2"
                        />
                        <TrTableParticipants 
                            id="3"
                        />
                        <TrTableParticipants 
                            id="4"
                        />
                        <TrTableParticipants 
                            id="5"
                        />
                        <TrTableParticipants 
                            id="6"
                        />
                        <TrTableParticipants 
                            id="7"
                        />
                        <TrTableParticipants 
                            id="8"
                        />
                        <TrTableParticipants 
                            id="9"
                        />
                    </tbody>
                </Table>
            </div>

            <CardFooter className="d-flex justify-content-center pb-0">
                <Paginations />
            </CardFooter>



        </Card>

);

export default ParticipantsList;