import React, { useState } from 'react'

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CustomInput,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    UncontrolledModal
} from '../../../components';

import ParticipantsList from './ParticipantList/ParticipantsList';


const Participants = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const HandleOptionSelect = (option) => {
        setSelectedOption(option)
    }

    const toggleModal = () => setModalOpen(prevState => !prevState);

    const ModalFullScreen = {
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: "1050",
        overflow: "auto",
        outline: "0"
    }

    const RenderInput = ({ selectedOption }) => {
        if (selectedOption === "email") {
            return <Input type="text" placeholder='Enter Email here' />
        }
        else if (selectedOption === "browse") {
            return (
                <>
                    <Button color="primary" onClick={toggleModal}>Add New</Button>
                    <Modal isOpen={modalOpen} toggle={toggleModal} style={ModalFullScreen} size="lg">
                        <ModalHeader toggle={toggleModal}>Select User</ModalHeader>
                        <ModalBody>
                            <ParticipantsList />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="link" size="lg" className="text-primary" onClick={toggleModal}>Cancel</Button>
                            <Button color="primary" size="lg" onClick={toggleModal}>Add</Button>{' '}
                        </ModalFooter>
                    </Modal>

                </>
            )

        }
        else return null;
    }

    return (
        <Container>

            <Row>
                <Col lg={12}>
                    <Card className="mb-3">
                        <CardBody>
                            <Form>

                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Upload Participants List:
                                    </Label>
                                    <Col sm="6">
                                        <CustomInput type="file" id="addCv" name="customFile" label="" />
                                    </Col>
                                    <Col sm={3}>
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Participants Rights :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name=""
                                            id="input"
                                            placeholder="Enter Participants Rights"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        Participants Can Rate :
                                    </Label>
                                    <Col sm="9">
                                        <CustomInput
                                            type="radio"
                                            name="operatingSystem"
                                            id="operatingSystem21"
                                            label="Yes"
                                            inline
                                            defaultChecked
                                        />
                                        <CustomInput
                                            type="radio"
                                            name="operatingSystem"
                                            id="operatingSystem22"
                                            label="No"
                                            inline
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="contestName" sm="3">
                                        Participants Max Assest Size :
                                    </Label>
                                    <Col sm="9">
                                        <Input type="text" name="contestName" id="contestName" placeholder="Max Content Size 7MB" /></Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="contestName" sm="3">
                                        Max Asset Allowed:
                                    </Label>
                                    <Col sm="2">
                                        <Input type="text" name="contestName" id="contestName" placeholder="1" /> </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Thank You Message :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name=""
                                            id="input"
                                            placeholder="Enter Thank You Message"
                                        />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label for="participants" sm={3}>
                                        Participants :
                                    </Label>

                                    <Col sm={3}>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle className="align-self-center" color="primary" outline caret>
                                                {selectedOption ? selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1) : <i className="fa-fw fa fa-plus"></i>}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => HandleOptionSelect("email")}>Email</DropdownItem>
                                                <DropdownItem onClick={() => HandleOptionSelect("browse")}>Browse from the tool</DropdownItem>
                                                <DropdownItem onClick={() => HandleOptionSelect("open")}>Open to All</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </Col>
                                    <Col sm={6}>
                                        <RenderInput selectedOption={selectedOption} />
                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Label for="tag" sm={3}>
                                        List of Existing Participants :
                                    </Label>
                                    <Col sm={9}>
                                    </Col>
                                </FormGroup>
                                <ParticipantsList />


                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>





        </Container>
    )
}

export default Participants;