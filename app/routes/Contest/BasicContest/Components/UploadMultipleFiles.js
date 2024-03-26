// import React, { useState } from 'react'

// import {
//     Container,
//     Row,
//     Col,
//     Card,
//     CardTitle,
//     CardBody,
//     Button,
//     InputGroup,
//     InputGroupAddon,
//     CustomInput,
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     FormText
// } from "../../../../components"




// const UploadMultipleFiles = () => {
//     const [images, setImages] = useState([])
//     const [videos, setVidoes] = useState("");

//     const HandleImageUpload = (e) => {
//         const files = Array.from(e.target.files)
//         const imageUrls = files.map(file => URL.createObjectURL(file));
//         setImages([...images, ...imageUrls])
//     }

//     return (
//         <Container>
//             <Form>
//                 <FormGroup row>
//                     <Label sm="3" for='imageUpload'>Upload Images : </Label>
//                     <Col sm="9">
//                         <Input type="file" name="file" multiple onChange={HandleImageUpload} />
//                     </Col>
//                 </FormGroup>
//                 <FormGroup row>
//                     <Label sm="3" for='imageUpload'>Upload Video : </Label>
//                     <Col sm="9">
//                         <Input type="text" name="videoUrl" placeholder="Enter Video Link" multiple onChange={e => setVidoes(e.target.value)} />
//                     </Col>
//                 </FormGroup>
//             </Form>
//             <Row>
//                 <Col sm='9'>
//                     <Row>
//                         {
//                             images && images.map((image, index) => (
//                                 <Col md='4' key={index}>
//                                     <Card>
//                                         <img width="100%" height="100" src={image} alt={`Uploaded Images ${index}`} />
//                                     </Card>
//                                 </Col>
//                             ))
//                         }
//                     </Row>
//                     {
//                         videos && (
//                             <Card>
//                                 <CardBody>
//                                     <iframe width="100%" height="150" src={videos} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//                                 </CardBody>
//                             </Card>
//                         )
//                     }
//                 </Col>
//             </Row>

//         </Container>
//     )
// }

// export default UploadMultipleFiles