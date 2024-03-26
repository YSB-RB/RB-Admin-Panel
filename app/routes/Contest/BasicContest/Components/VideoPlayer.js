import React, { useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  return (
    <div>
      <InputGroup>
        <Input
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={handleInputChange}
        />
        <InputGroupAddon addonType="append">
          <Button color="primary" onClick={toggleModal}>
            Play Video
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <ReactPlayer height="250px" width="100%" url={videoUrl} controls />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default VideoPlayer;