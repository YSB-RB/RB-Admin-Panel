import React from 'react'

import {
    Table,
    Card,
    CardFooter
} from "../../../components"
import { TrQDTable } from './TrQDTable';
import Paginations from '../../Contest/BasicContest/Components/Paginations/Paginations'


const ListTable = () => {
    return (
        <Card>
            <div className="table-responsive-xl">
                <Table className="mb-0" hover>
                    <thead>
                        <tr>

                            <th className="align-middle bt-0">Question Bank Name</th>
                            <th className="align-middle bt-0">Description</th>
                            <th className="align-middle bt-0">Category</th>
                            <th className="align-middle bt-0">Sub-Category</th>
                            <th className="align-middle bt-0 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <TrQDTable />
                        <TrQDTable
                            id="2" />
                        <TrQDTable
                            id="3" />
                        <TrQDTable
                            id="4" />
                        <TrQDTable
                            id="5" />
                        <TrQDTable
                            id="6" />
                        <TrQDTable
                            id="7" />
                        <TrQDTable
                            id="8" />
                        <TrQDTable
                            id="9" />
                        <TrQDTable
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