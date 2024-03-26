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
  ButtonGroup,
  Modal, ModalHeader, ModalBody, ModalFooter,
  UncontrolledModal
} from '../../../components';

import { HeaderDemo } from "../../components/HeaderDemo";
import AllContestModal from '../../Contest/BasicContest/ContestListModal/AllContestModal';

const Questions = () => {
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
  const [modalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(prevState => !prevState);

  return (
    <Container>

      <Row>
        <Col lg={12}>
          <HeaderDemo
            no={2}
            title="Add Questions to Test"
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
                  <Label for="addCv" sm={3}>
                    Add Questions to the Test :
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
                      {/* <Button color="primary">Add</Button>{' '}
                                            <Button color="secondary" onClick={toggleModal}>Cancel</Button> */}

                      <UncontrolledModal.Close
                        color="link"
                        className="text-primary"
                        size="lg"
                        onClick={toggleModal}
                      >
                        Close
                      </UncontrolledModal.Close>
                      <UncontrolledModal.Close onClick={toggleModal} color="primary" size="lg">
                        Save
                      </UncontrolledModal.Close>
                    </ModalFooter>
                  </Modal>
                </FormGroup>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </Container >

  )
}

export default Questions;