import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    FormGroup,
    Input,
} from '../../../../components';


const AddInput = () => {

    const [inputList, setinputList] = useState([{ First: " ", Second: "", Third: " " }]);

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
                    <FormGroup row>
                        <Col sm="3">
                            {
                                <Button className="btn btn-primary" onClick={handleaddclick}>+</Button>
                            }
                        </Col>
                    </FormGroup>
                    {
                        inputList.map((x, i) => {
                            return (
                                <FormGroup row className="mt-2">

                                    <Col sm="3">
                                        <Input type="text" name="firstName" class="form-control" placeholder="Enter here" onChange={e => handleinputchange(e, i)} />
                                    </Col>
                                    <Col sm="3">
                                        <Input type="text" name="lastName" class="form-control" placeholder="Enter here" onChange={e => handleinputchange(e, i)} />
                                    </Col>
                                    <Col sm="3">
                                        <Input type="select">
                                            <option>Marks </option>
                                            <option>Percentage </option>
                                        </Input>
                                    </Col>
                                    <Col sm="2">
                                        {
                                            inputList.length !== 1 &&
                                            <button className="btn btn-danger mx-1" onClick={() => handleremove(i)}>-</button>
                                        }
                                    </Col>

                                </FormGroup>

                            );
                        })
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default AddInput