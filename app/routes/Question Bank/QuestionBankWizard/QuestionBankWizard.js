import React from 'react';
import _ from 'lodash';

import {
    Container,
    Wizard,
    Card,
    CardFooter,
    CardBody,
    Button,
} from '../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import AddQuestions from "../Questions/AddQuestions"
import { CreateQuestion } from '../Questions/CreateQuestion';

const sequence = ['your-cart', 'shipping', 'payment', 'summary'];


export class QuestionBankWizard extends React.Component {
    state = {
        currentStep: _.first(sequence)
    }

    render() {
        const { currentStep } = this.state;

        return (
            <Container>
                <HeaderMain
                    title="Create Test"
                    className="my-4"
                />
                <Card>
                    <CardBody className="d-flex justify-content-center pt-5">
                        <Wizard
                            activeStep={currentStep}
                            onStepChanged={this._changeStep}
                        >
                            <Wizard.Step
                                id={sequence[0]}
                                icon={<i className="fa fa-shopping-basket fa-fw"></i>}
                                complete={this._isComplete(sequence[0])}
                            >
                                {/* Basic Details */}
                                Create Question
                            </Wizard.Step>
                            <Wizard.Step
                                id={sequence[1]}
                                icon={<i className="fa fa-cube fa-fw"></i>}
                                complete={this._isComplete(sequence[1])}
                            >
                              Add Question 
                            </Wizard.Step>
                            {/* <Wizard.Step
                                id={sequence[2]}
                                icon={<i className="fa fa-credit-card fa-fw"></i>}
                                complete={this._isComplete(sequence[2])}
                            >
                                Participants
                            </Wizard.Step>
                            <Wizard.Step
                                id={sequence[3]}
                                icon={<i className="fa fa-navicon fa-fw"></i>}
                                complete={this._isComplete(sequence[3])}
                            >
                               Reports
                            </Wizard.Step> */}
                        </Wizard>
                    </CardBody>

                    <CardBody className="p-5">
                        {
                            (() => {
                                switch (this.state.currentStep) {
                                    case sequence[0]:
                                        return <CreateQuestion/>
                                    case sequence[1]:
                                    return <AddQuestions/>
                                
                                }
                            })()
                        }
                    </CardBody>

                    <CardFooter className="p-4 bt-0">
                        <div className="d-flex">
                            {
                                currentStep !== sequence[0] && (
                                    <Button onClick={() => { this._prevStep() }} color="link" className='mr-3'>
                                        <i className='fa fa-angle-left mr-2'></i>
                                        Previous
                                    </Button>
                                )
                            }
                            {
                                currentStep !== sequence[sequence.length - 1] && (
                                    <Button color='primary' onClick={() => { this._nextStep() }} className="ml-auto px-4">
                                        Next
                                        <i className='fa fa-angle-right ml-2'></i>
                                    </Button>
                                )
                            }
                        </div>
                    </CardFooter>
                </Card>
            </Container>
        );
    }

    _changeStep = (stepId) => {
        this.setState({
            currentStep: stepId
        });
    }

    _prevStep = () => {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index - 1]
        });
    }

    _nextStep = () => {
        const index = sequence.indexOf(this.state.currentStep);
        this.setState({
            currentStep: sequence[index + 1]
        });
    }

    _isComplete = (stepId) =>
        sequence.indexOf(stepId) < sequence.indexOf(this.state.currentStep)
}
