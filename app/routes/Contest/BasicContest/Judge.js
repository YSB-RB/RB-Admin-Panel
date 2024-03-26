import React, { useState } from "react"

import {
    Container,
    Row,
    Col,
    Input,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from './../../../components';

import ParticipantsList from "./ParticipantList/ParticipantsList";

export const Judge = () => {

    const RC = ["Thumps Up/Down", "Rating"]

    const [selectedOption, setSelectedOption] = useState(null)
    const [selectRatingOptions, setRatingOptions] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)



    const HandleOptionSelect = (option) => {
        setSelectedOption(option)
    }

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


    const toggleModal = () => setModalOpen(prevState => !prevState);

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

    const HandleRatingOptions = (options) => {
        setRatingOptions(options)
    }

    const RStyle = {
        gap: '10px',
        display: "flex"
    }

    const RenderRatingInput = ({ selectRatingOptions }) => {
        if (selectRatingOptions === "rating") {
            return (
                <div style={RStyle}>
                    <Input type="text" placeholder="Rating Criteria" />
                    <Input type="text" placeholder="Rating Weightage" />
                </div>
            )
        }
        else if (selectRatingOptions === "thums-Up/Dowen") {
            return null;
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
                                    <Label for="exampleSelect" sm='3'>
                                        Rating Criteria :
                                    </Label>
                                    <Col sm={3}>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle className="align-self-center" color="primary" outline caret>
                                                {selectRatingOptions ? selectRatingOptions.charAt(0).toUpperCase() + selectRatingOptions.slice(1) : <i className="fa-fw fa fa-plus"></i>}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => HandleRatingOptions("rating")} >Rating</DropdownItem>
                                                <DropdownItem onClick={() => HandleRatingOptions("thums-Up/Dowen")}>Thumbs Up/Down</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </Col>
                                    <Col sm={6}>
                                        <RenderRatingInput selectRatingOptions={selectRatingOptions} />

                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleSelect" sm='3'>
                                        Judge List :
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
                                        List of Existing Judges :
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