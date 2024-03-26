import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from '../../../components';

import { HeaderDemo } from "../../components/HeaderDemo";
import Add from '../BasicTest/Components/Add';
import CreateQuestions from '../BasicTest/Components/CreateQuestions';
import ReactPlayer from 'react-player';
import UploadImages from '../../Contest/BasicContest/Components/Upload/UploadImages';


const AddQuestions = () => {
  const [images, setImages] = useState([])
  const [videos, setVidoes] = useState("");
  const [audio, setAudio] = useState([])

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
            title="Add Questions to Questions Bank"
            subTitle={(
              <React.Fragment>
                Please put the some basic detials about your Test Questions.
              </React.Fragment>
            )}
          />
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card className="mb-3">
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="file" sm={3}>
                    Upload Questions:
                  </Label>
                  <Col sm={4}>
                    <Input
                      type="file"
                      name="number"
                      id="num"
                      placeholder="Enter No of Questions"
                    />
                  </Col>
                  <Col sm={3}>
                    <Button color='primary'>Submit</Button>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label sm="3" for='imageUpload'>Upload Images : </Label>
                  <Col sm="9">
                    {/* <Dropzone /> */}
                 <UploadImages/>
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
                  <Label for="input" sm={4}>
                    Display Options After Audio :
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="checkbox"
                      name=""
                      id="input"
                      placeholder="Enter Clues"
                    />
                  </Col>
                </FormGroup>

                <CreateQuestions />

                <FormGroup row>
                  <Label for="input" sm={3}>
                    Add Clues :
                  </Label>
                  <Col sm={9}>
                    <Add />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="input" sm={4}>
                    Break after the Question :
                  </Label>
                  <Col sm={3}>
                    <Input
                      type="checkbox"
                      name=""
                      id="input"
                      placeholder="Enter Clues"
                    />
                  </Col>
                </FormGroup>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Container >

  )
}

export default AddQuestions;