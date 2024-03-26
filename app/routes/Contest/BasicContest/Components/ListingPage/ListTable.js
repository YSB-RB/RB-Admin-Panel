import React from 'react'

import {
    Table,
    Card,
    CardFooter
} from '../../../../../components'
import { TrTableList } from './TrTableList';
import Paginations from '../Paginations/Paginations'


const ListTable = () => {
    return (
        // <div className="table-responsive-xl">
        <Card className="mb-3">

            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th className="align-middle bt-0">Image</th>
                            <th className="align-middle bt-0">Contest Name</th>
                            <th className="align-middle bt-0">Contest Description</th>
                            <th className="align-middle bt-0">Organised By</th>
                            <th className="align-middle bt-0">Start Date</th>
                            <th className="align-middle bt-0">Finish Date</th>
                            <th className="align-middle bt-0 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <TrTableList />
                        <TrTableList
                            id="2" />
                        <TrTableList
                            id="3" />
                        <TrTableList
                            id="4" />
                        <TrTableList
                            id="5" />
                        <TrTableList
                            id="6" />
                        <TrTableList
                            id="7" />
                        <TrTableList
                            id="8" />
                        <TrTableList
                            id="9" />
                        <TrTableList
                            id="10" />
                    </tbody>
                </Table>
            </div>

            <CardFooter className="d-flex justify-content-center pb-0">
                <Paginations/>
            </CardFooter>

        </Card>

    )
}

export default ListTable;