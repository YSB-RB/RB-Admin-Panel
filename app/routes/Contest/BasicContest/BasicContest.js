import React, { useState } from "react"

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Button,
    InputGroup,
    InputGroupAddon,
    CustomInput,
    Form,
    FormGroup,
    Label,
    Input,
    ButtonGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
    UncontrolledModal
} from './../../../components';

import ReactPlayer from 'react-player';

import AddMultiple from "./Components/AddMultiple"
// import { Dropzone } from "./Components/Dropzone";
import UploadImages from "./Components/Upload/UploadImages";
import AllContestModal from "./ContestListModal/AllContestModal";



export const BasicContest = () => {
    const [images, setImages] = useState([])
    const [videos, setVidoes] = useState("");
    const [price, setPrice] = useState([{ First: " ", Second: " " }]);
    const [rules, setRules] = useState([" "])
    const [inputs, setInputs] = useState([{ First: " ", Second: " " }])
    const [modalOpen, setModalOpen] = useState(false)

    const AssetsType = ["Picture", "Video", "Event", "Document", "Essay"]
    const SocialMedia = ["Facebook", "Instagram", "Linkedin", "Twitter"]

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


    const HandleImageUpload = (e) => {
        const files = Array.from(e.target.files)
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...imageUrls])
    }

    const handleprizeinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...price];
        list[index][name] = value;
        setPrice(list);
    }

    const handleruleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...rules];
        list[index][name] = value;
        setRules(list);
    }

    const handleremoveprize = index => {
        const list = [...price];
        list.splice(index, 1);
        setPrice(list);
    }

    const handleremoverules = index => {
        const list = [...rules];
        list.splice(index, 1);
        setRules(list);
    }

    const handleAddPrize = () => {
        setPrice([...price, { First: " ", Second: "" }]);
    }

    const handleAddRules = () => {
        setRules([...rules, " "]);
    }

    const HandlSocailInputChange = (e, index) => {
        const { name, value } = e.target;
        const inputlist = [...inputs];
        inputlist[index][name] = value;
        setInputs(inputlist)
    }

    const HandleAddSocialInputs = (index) => {
        setInputs([...inputs, { First: " ", Second: " " }])
    }

    const HandleDeleteSocial = (index) => {
        const inputlist = [...inputs]
        inputlist.splice(index, 1);
        setInputs(inputlist)
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
                                        Name :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="text"
                                            name=""
                                            id="input"
                                            placeholder="Enter Content Name"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="textArea" sm={3}>
                                        Description :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="desc"
                                            id="desc"
                                            placeholder="Enter Description"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Organised By :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="text"
                                            name=""
                                            id="input"
                                            placeholder="Enter Organiser Name"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3" for='imageUpload'>Upload Images : </Label>

                                    <Col sm="9">
                                        {/* <Dropzone /> */}
                                        <UploadImages />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3" for='imageUpload'>Video Link: </Label>
                                    <Col sm="5">
                                        <Input type="text" name="videoUrl" placeholder="Enter Video Url" multiple onChange={e => setVidoes(e.target.value)} />
                                    </Col>
                                    <Col sm="4">
                                        {
                                            videos && (
                                                <>
                                                    <ReactPlayer height="200px" width="300px" url={videos} controls />
                                                </>
                                            )
                                        }
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Time Line :
                                    </Label>
                                    <Col sm="4">
                                        <Label for="contestName">Start Date</Label>
                                        <Input type="date" name="startDate" id="startDate" placeholder="Start Date" />
                                    </Col>

                                    <Col sm="4">
                                        <Label for="contestName">Finish Date </Label>
                                        <Input type="date" name="startDate" id="startDate" placeholder="Start Date" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="assets" sm={3}>
                                        Assest Type :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="select"
                                            name="select"
                                            id="defaultSelect"
                                        >
                                            {
                                                AssetsType.map((asset, index) => {
                                                    return (
                                                        <option key={index}>{asset}</option>
                                                    )
                                                })
                                            }
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="tag" sm={3}>
                                        Add Tag :
                                    </Label>
                                    <Col sm={9}>
                                        <AddMultiple />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm={3} for="bookmark" >
                                        Add Prize :
                                    </Label>
                                    <Col sm={2}>
                                        <ButtonGroup>
                                            <Button color="primary" className="align-self-center" id="tooltipAddNew" onClick={handleAddPrize}>
                                                <i className="fa-fw fa fa-plus"></i>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col sm={7}>
                                        {
                                            price.map((x, i) => {
                                                return (
                                                    <FormGroup row>
                                                        <Col sm={4} >
                                                            <Input type="text" name="" placeholder="Add Prize" onChange={e => handleprizeinputchange(e, i)} />
                                                        </Col>
                                                        <Col sm={5}>
                                                            <Input type="text" name="" placeholder="Prize Description" onChange={e => handleprizeinputchange(e, i)} />
                                                        </Col>

                                                        <Col sm={3}>
                                                            {
                                                                price.length !== 1 &&
                                                                <Button className="btn btn-danger" onClick={() => handleremoveprize(i)}>x</Button>
                                                            }
                                                        </Col>
                                                    </FormGroup>
                                                );
                                            })
                                        }
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm={3} for="rule" >
                                        Rules :
                                    </Label>
                                    <Col sm={2}>
                                        <ButtonGroup>
                                            <Button color="primary" className="align-self-center" id="tooltipAddNew" onClick={handleAddRules}>
                                                <i className="fa-fw fa fa-plus"></i>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col sm={7}>
                                        {
                                            rules.map((x, i) => {
                                                return (
                                                    <FormGroup row key={i}>
                                                        <Col sm={9}>
                                                            <Input type="text" name="" placeholder="Rule" onChange={e => handleruleinputchange(e, i)} />
                                                        </Col>
                                                        <Col sm={3}>
                                                            {
                                                                rules.length !== 1 &&
                                                                <Button className="btn btn-danger" onClick={() => handleremoverules(i)}>x</Button>
                                                            }
                                                        </Col>
                                                    </FormGroup>
                                                );
                                            })
                                        }
                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Label for="exampleSelect" sm={3}>
                                        Social Media:
                                    </Label>
                                    <Col sm={2}>
                                        <Button color="primary" className="align-self-center" id="tooltipAddNew" onClick={HandleAddSocialInputs}>
                                            <i className="fa-fw fa fa-plus"></i>
                                        </Button>
                                    </Col>

                                    <Col sm={7}>
                                        {
                                            inputs.map((x, i) => {
                                                return (
                                                    <FormGroup row key={i}>
                                                        <Col sm={4} >
                                                            <Input type='select' name="socialmedia" onChange={(e) => HandleInputChange(e, i)}>
                                                                {
                                                                    SocialMedia.map((asset, index) => {
                                                                        return (
                                                                            <option key={index}>{asset}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </Input>
                                                        </Col>
                                                        <Col sm={5}>
                                                            <Input type="text" name="social-link" placeholder='Enter Account Link' onChange={(e) => HandlSocailInputChange(e, i)} />
                                                        </Col>

                                                        <Col sm={3}>
                                                            {
                                                                inputs.length !== 1 &&
                                                                <Button className="btn btn-danger m-1" onClick={HandleDeleteSocial}> x</Button>
                                                            }
                                                        </Col>
                                                    </FormGroup>
                                                );
                                            })
                                        }
                                    </Col>


                                </FormGroup>

                                <FormGroup row>
                                    <Label for="addCv" sm={3}>
                                        Past Contest Reference:
                                    </Label>
                                    <Col sm={9}>
                                        <Button color="primary" onClick={toggleModal}>Add</Button>
                                    </Col>

                                    <Modal isOpen={modalOpen} toggle={toggleModal} style={ModalFullScreen} size="lg">
                                        <ModalHeader toggle={toggleModal}>Add New</ModalHeader>
                                        <ModalBody>

                                            {/* <h1>Modal Data Will be Show Here...</h1> */}
                                            <AllContestModal />

                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="link" size="lg" className="text-primary" onClick={toggleModal}>Cancel</Button>
                                            <Button color="primary" size="lg" onClick={toggleModal}>Add</Button>{' '}
                                        </ModalFooter>
                                    </Modal>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="leftFileInput2" sm={3}>
                                        Past Contest Picture:
                                    </Label>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <CustomInput type="file" id="leftFileInput2" name="customFile" />
                                            <InputGroupAddon addonType="append">
                                                <i className="fa fa-fw fa-info-circle mr-2"></i>
                                                All Images Accepted
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="contestName" sm="3">
                                        Contest Max Assest Size :
                                    </Label>
                                    <Col sm="9">
                                        <Input type="text" name="contestName" id="contestName" placeholder="Max Content Size 7MB" /></Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label sm="3">
                                        Contest Visibility :
                                    </Label>
                                    <Col sm="9">
                                        <CustomInput
                                            type="radio"
                                            name="operatingSystem"
                                            id="operatingSystem21"
                                            label="Private"
                                            inline
                                            defaultChecked
                                        />
                                        <CustomInput
                                            type="radio"
                                            name="operatingSystem"
                                            id="operatingSystem22"
                                            label="Public"
                                            inline
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="textArea" sm={3}>
                                        Copy Rights Declaration :
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type="textarea"
                                            name="desc"
                                            id="desc"
                                            placeholder="Enter Description"
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>


                        </CardBody>


                    </Card>
                </Col>
            </Row>
        </Container>

    )
}



