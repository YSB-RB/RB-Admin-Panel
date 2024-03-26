import React, { useState } from "react"

import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from '../../../components';
import ReactPlayer from 'react-player';
import { Dropzone } from '../../Contest/BasicContest/Components/Dropzone'
import { HeaderDemo } from "../../components/HeaderDemo";
import UploadImages from "../../Contest/BasicContest/Components/Upload/UploadImages";
import AddMultiple from "../../Contest/BasicContest/Components/AddMultiple"

export const BesicTest = () => {

    const SocialMedia = ["Facebook", "Instagram", "Linkedin", "Twitter"]

    const [images, setImages] = useState([])
    const [videos, setVidoes] = useState("");
    const [audio, setAudio] = useState([])

    const [inputList, setinputList] = useState([{ First: " ", Second: "", Third: " " }]);

    const HandleImageUpload = (e) => {
        const files = Array.from(e.target.files)
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImages([...images, ...imageUrls])
    }

    // Add Input 
    const handleinputchange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setinputList(list);
    }

    const handleremove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setinputList(list);
    }

    const handleaddclick = () => {
        setinputList([...inputList, { First: " ", Second: "", Third: " " }]);
    }

    const HandleAudio = (e) => {
        const files = Array.from(e.target.files)
        const audioFiles = files.map(file => URL.createObjectURL(file));
        setAudio([...audio, ...audioFiles])
    }
    return (
        <Container>

            <Row>
                <Col lg={12}>
                    <HeaderDemo
                        no={2}
                        title="Create Test"
                        subTitle={(
                            <React.Fragment>
                                Please Create your test here following the bellow simple steps.
                            </React.Fragment>
                        )}
                    />
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
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
                            <Label sm="3" for='imageUpload'>Upload Images : </Label>
                            <Col sm="9">
                                {/* <Dropzone /> */}
                                <UploadImages />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm="3" for='imageUpload'>Video Link: </Label>
                            <Col sm="5">
                                <Input type="text" name="videoUrl" placeholder="Enter Video URL" multiple onChange={e => setVidoes(e.target.value)} />
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
                            <Label sm="3" for='imageUpload'>Upload Audio : </Label>
                            <Col sm="5">
                                <Input type="file" id="AudioFile" name="audioUrl" title="Uplaod File" placeholder="Enter Audio Url" multiple onChange={HandleAudio} />
                            </Col>
                            <Col sm="3">
                                {
                                    audio && audio.map((audio, index) => (
                                        <Col key={index}>
                                            <audio controls >
                                                <source src={audio} type="audio/ogg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </Col>
                                    ))

                                }
                            </Col>
                            {/* <Col sm={3}>
                                {
                                    price.length !== 1 &&
                                    <Button className="btn btn-danger" onClick={() => HandleDelete(i)}>x</Button>
                                }
                            </Col> */}
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
                            <Label for="tag" sm={3}>
                                Add Tag :
                            </Label>
                            <Col sm={9}>
                                <AddMultiple />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="socialmedia" sm='3'>
                                Social Media:
                            </Label>
                            <Col sm="3">
                                <Input type="select" name="select">
                                    {
                                        SocialMedia.map((asset, index) => {
                                            return (
                                                <option key={index}>{asset}</option>
                                            )
                                        })
                                    }
                                </Input>
                            </Col>
                            <Col sm="6">
                                <Input type="text" name="social-link" placeholder="Enter Link">
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="checkbox" sm={4}>
                                Random Questions :
                            </Label>
                            <Col sm={1}>
                                <Input
                                    type="checkbox"
                                    name="checkbox"
                                    id=""
                                    placeholder="Enter Description"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="number" sm={3}>
                                Number of Questions in the test:
                            </Label>
                            <Col sm={8}>
                                <Input
                                    type="number"
                                    name="number"
                                    id="num"
                                    placeholder="Enter No of Questions"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="pass-marks" sm={3}>
                                Pass Marks :
                            </Label>
                            <Col sm={6}>
                                <Input
                                    type="number"
                                    name="number"
                                    id="num"
                                    placeholder="Enter Pass Marks"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label sm={3} for="bookmark" >
                                Bookmark Marks :
                            </Label>
                            <Col sm={1}>
                                <Button color="primary" className="m-1" onClick={handleaddclick}>+</Button>
                            </Col>
                            <Col sm={7}>
                                {
                                    inputList.map((x, i) => {
                                        return (
                                            <Row>
                                                <Col sm={3} className="mt-1">
                                                    <Input type="text" name="" placeholder="Add Here" onChange={e => handleinputchange(e, i)} />
                                                </Col>
                                                <Col sm={3} className="mt-1">
                                                    <Input type="text" name="" placeholder="Add Mark" onChange={e => handleinputchange(e, i)} />
                                                </Col>
                                                <Col sm={3}>
                                                    <Input type="select" className="mt-1">
                                                        <option>Marks </option>
                                                        <option>Percentage </option>
                                                    </Input>
                                                </Col>
                                                <Col sm={3}>
                                                    {/* {
                                                    inputList.length - 1 === i &&
                                                    <Button color="primary" className="m-1" onClick={handleaddclick}>+</Button>
                                                } */}
                                                    {
                                                        inputList.length !== 1 &&
                                                        <Button className="btn btn-danger m-1" onClick={() => handleremove(i)}>x</Button>
                                                    }
                                                </Col>
                                            </Row>
                                        );
                                    })
                                }

                            </Col>

                        </FormGroup>

                    </Form>

                </Col>
            </Row>
        </Container>

    )
}