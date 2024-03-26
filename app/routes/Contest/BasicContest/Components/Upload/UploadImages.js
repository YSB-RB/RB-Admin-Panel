import React, { useState } from 'react';
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
    FormText,
    ButtonGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
    UncontrolledModal
} from "../../../../../components";

const UploadImages = () => {
    const [images, setImages] = useState([]);
    const [type, setType] = useState('');
    const [thumbnailSize, setThumbnailSize] = useState('');

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages([...images, ...files]);
    };

    const AddBtnDiv = {
        width: '100px',
        height: '100px',
        borderRadius: '10px',
        border: '1px solid teal',
        margin: '10px',
        // display: 'inline-block',
        display: 'flex',
        justifyContent: "center",
    }

    const AddBtnLevel = {
        width: '100%',
        height: '100%',
        color: "teal",
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    }

    return (
        <Container>
            <Card>
                <CardBody>
                    <Row >
                        <Col>
                            {images.map((image, index) => (
                                <div key={index} style={{ width: '100px', height: '100px', margin: '10px', display: 'inline-block', position: 'relative' }}>
                                    <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                                    <Button
                                        color="white"
                                        size="sm"
                                        style={{ position: 'absolute', bottom: '-3px', right: '-6px', padding: '2px 1px' }}
                                        onClick={() => setImages(images.filter((img, i) => i !== index))}
                                    >
                                        <i style={{ fontSize: "1rem", color: "white" }} className="fa fa-fw fa-trash mr-2"></i>
                                    </Button>
                                </div>
                            ))}
                            <div className='d-flex justify-content-center'>
                                <div style={AddBtnDiv}>
                                    <label htmlFor="upload-input" style={AddBtnLevel} >
                                        <i className="fa-fw fa fa-plus"></i>
                                        Add More
                                        <input id="upload-input" type="file" accept="image/*" multiple onChange={handleImageChange} style={{ display: 'none' }} />
                                    </label>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>

                        <Col sm={4}>
                            <FormGroup style={{ fontSize: '1rem' }}>
                                <Label for="type" >Type</Label>
                                <div>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="checkbox" name="type" value="family_safe" onChange={(e) => setType(e.target.value)} checked={type === 'family_safe'} />{' '}
                                            Family Safe
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="checkbox" name="type" value="adult_content" onChange={(e) => setType(e.target.value)} checked={type === 'adult_content'} />{' '}
                                            Adult Content
                                        </Label>
                                    </FormGroup>
                                </div>
                            </FormGroup>
                        </Col>

                        <Col>
                        </Col>

                        <Col sm={5}>
                            <FormGroup style={{ fontSize: '1rem' }}>
                                <Label for="thumbnailSize">Thumbnail Size</Label>
                                <Input type="select" name="thumbnailSize" id="thumbnailSize" onChange={(e) => setThumbnailSize(e.target.value)} value={thumbnailSize}>
                                    <option value="100x100">100x100 (Small)</option>
                                    <option value="180x180">180x180 (Standard)</option>
                                    <option value="250x250">250x250 (Large)</option>
                                    <option value="300x300">300x300 (Extra Large)</option>
                                </Input>
                            </FormGroup>
                        </Col>


                    </Row>

                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Button style={{ margin: "auto" }} color="primary">Upload</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
};

export default UploadImages;

