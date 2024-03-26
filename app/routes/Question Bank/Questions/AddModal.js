import React from 'react'
import React from "react";
import { faker } from "@faker-js/faker";

import {
    Card,
    UncontrolledModal,
    ModalHeader,
    CardBody,
    ModalBody,
    ModalFooter,
} from "./../../../components";


const AddModal = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <UncontrolledModal target="modalDefault201" size="sm">
                        <ModalHeader tag="h6">
                            Modal: Small Size
                            <span className="small ml-1 text-muted">#2.01</span>
                        </ModalHeader>
                        <ModalBody>{faker.lorem.paragraph()}</ModalBody>
                        <ModalFooter>
                            <UncontrolledModal.Close
                                color="link"
                                className="text-primary"
                                size="sm"
                            >
                                Close
                            </UncontrolledModal.Close>
                            <UncontrolledModal.Close color="primary" size="sm">
                                Save
                            </UncontrolledModal.Close>
                        </ModalFooter>
                    </UncontrolledModal>
                </CardBody>
            </Card>

        </div>
    )
}

export default AddModal