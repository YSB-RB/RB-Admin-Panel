import React, { useState } from "react"

import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from '../../../components';
import ReactPlayer from 'react-player';
import { Dropzone } from '../../Contest/BasicContest/Components/Dropzone'
import { HeaderDemo } from "../../components/HeaderDemo";



import AddMultiple from "../../Contest/BasicContest/Components/AddMultiple"
import AddCategory from "./AddCategory";
import UploadImages from "../../Contest/BasicContest/Components/Upload/UploadImages";

export const CreateQuestion = () => {

    const SocialMedia = ["Facebook", "Instagram", "Linkedin", "Twitter"]
    const [selectRatingOptions, setRatingOptions] = useState(null)


    const [images, setImages] = useState([])
    const [videos, setVidoes] = useState("");

    const [inputList, setinputList] = useState([{ First: " ", Second: "", Third: " " }]);

    //Select Options

    const HandleOptionSelect = (option) => {
        setSelectedOption(option)
    }


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


    return (
        <Container>

            <Row>
                <Col lg={12}>
                    <HeaderDemo
                        no={2}
                        title="Create Question Bank"
                        subTitle={(
                            <React.Fragment>
                                Please Create your Questions here following the bellow simple steps.
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
                            <Label for="tag" sm={3}>
                                Add Tag :
                            </Label>
                            <Col sm={9}>
                                <AddMultiple />
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label for="category" sm={3}>
                                Category :
                            </Label>
                            <Col sm={3}>
                                <AddCategory />
                            </Col>

                            <Label for="sub-category" sm={3}>
                                Sub Category :
                            </Label>
                            <Col sm={3}>
                                <AddCategory />
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container >

    )
}