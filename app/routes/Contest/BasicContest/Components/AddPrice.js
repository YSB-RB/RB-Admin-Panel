import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Button,
    InputGroup,
    InputGroupAddon,
    CustomInput,
    Form,
    FormGroup,
    Label,
    Input,

} from "../../../../components"

const AddPrice = () => {
    const [inputList, setinputList] = useState([{ First: " ", Second: "" }]);

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
        setinputList([...inputList, { First: " ", Second: "" }]);
    }


    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Form>
                        <FormGroup row>
                            <Label sm={2} for="price" >
                                Add Price :
                            </Label>
                            {
                                inputList.map((x, i) => {
                                    return (
                                        <>
                                            <Col sm="3">
                                                <Input type="text" name="firstName" className="form-control" placeholder="Price Name" onChange={e => handleinputchange(e, i)} />
                                            </Col>
                                            <Col sm="4">
                                                <Input type="text" name="lastName" className="form-control" placeholder="Price Description (optinal)" onChange={e => handleinputchange(e, i)} />
                                            </Col>
                                            <Col sm="3">
                                                {
                                                    inputList.length - 1 === i &&
                                                    <Button color="primary" className="m-1" onClick={handleaddclick}>+</Button>
                                                }
                                                {
                                                    inputList.length !== 1 &&
                                                    <Button className="btn btn-danger m-1" onClick={() => handleremove(i)}>x</Button>
                                                }
                                            </Col>

                                        </>

                                    );
                                })
                            }
                        </FormGroup>
                    </Form>

                </Col>
            </Row>
        </Container >
    )
}

export default AddPrice;