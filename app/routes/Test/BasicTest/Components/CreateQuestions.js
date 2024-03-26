
import React, { useState } from 'react'
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardBody,
    Accordion,
    CardText,
} from '../../../../components'


const CreateQuestions = () => {
    const [questionType, setQuestionType] = useState('MCQ');
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [questions, setQuestions] = useState([]);

    const handleOptionChange = (index) => {
        const newCorrectAnswer = [...correctAnswer];
        newCorrectAnswer[index] = !newCorrectAnswer[index];
        setCorrectAnswer(newCorrectAnswer);
    };

    const handleQuestionTypeChange = (e) => {
        setQuestionType(e.target.value);
        if (e.target.value === 'SAQ') {
            setOptions([ ]);
            setCorrectAnswer([]);
        }
    };

    const handleOptionTextChange = (e, index) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = { questionType, questionText, options, correctAnswer };
        setQuestions([...questions, newQuestion]);
        setQuestionText('');
        setOptions([]);
        setCorrectAnswer([]);
    };

    const handleremove = index => {
        const list = [...options];
        list.splice(index, 1);
        setOptions(list);
    }

    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label sm={3} for="questionType">Question Type: </Label>
                <Col sm="9">
                    <Input
                        type="select"
                        name="questionType"
                        id="questionType"
                        value={questionType}
                        onChange={handleQuestionTypeChange}
                    >
                        <option value="MCQ">Multiple Choice - Checkbox</option>
                        <option value="SAQ">Short Answer</option>
                        <option value="Descriptive">Descriptive</option>
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm="3" for="question">Question Input:</Label>
                <Col sm="9">
                    <Input
                        type="text"
                        name="questionText"
                        id="questionText"
                        placeholder='Enter Question here'
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                    />
                </Col>
            </FormGroup>

            {
                questionType === 'MCQ' && (
                    <FormGroup row>
                        <Col sm={3}>
                            <Label for="options">Options :</Label>
                            <Button className='mx-2' color='primary' type="button" onClick={() => setOptions([...options, ''])}>
                                +
                            </Button>
                        </Col>

                        <Col sm={9}>
                            <Card>
                                <CardBody>
                                    {options.map((option, index) => (
                                        <>
                                            <Label sm={6}>
                                                <Input
                                                    type="text"
                                                    value={option}
                                                    onChange={(e) => handleOptionTextChange(e, index)}
                                                    placeholder={`Enter option ${index + 1}`}
                                                />
                                            </Label>
                                            <Label sm={3}>
                                                <Input
                                                    type="checkbox"
                                                    checked={correctAnswer[index]}
                                                    onChange={() => handleOptionChange(index)}
                                                />
                                                Correct
                                            </Label>
                                            {
                                                <Button className='mx-3' color='primary' type="button" onClick={() => handleremove(index)}>
                                                    x
                                                </Button>
                                            }
                                        </>
                                    ))}
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className='d-flex justify-content-center mt-4'>
                            <Button color='primary' type='submit'>Preview</Button>
                        </Col>
                    </FormGroup>
                )
            }
            <FormGroup row>
                <Col>Your Questions are:  </Col>
                <Col sm={9}>
                    {
                        questions.map((q, index) => (
                            <Accordion className="mb-2 mt-2" initialOpen key={index}>
                                <Accordion.Header className="d-flex h6">
                                    <span>Question {index + 1}</span>
                                    <Accordion.Indicator className="ml-auto" />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <CardText>
                                        <h1>{q.questionText}</h1>
                                        {q.options.map((option, i) => (
                                            <div key={i}>

                                                <input type="checkbox" checked={q.correctAnswer[i]} disabled />

                                                 {option}
                                                <Label sm={3}>
                                                Correct
                                            </Label>
                                            
                                            </div>
                                        ))}
                                    </CardText>
                                </Accordion.Body>
                            </Accordion>
                        ))
                    }
                </Col>
            </FormGroup>

        </Form >

    )
}
export default CreateQuestions;
