import React from 'react';
import _ from 'lodash';

import {
    Container,
    Wizard,
    Card,
    Nav,
    NavItem,
    NavLink,
    CardFooter,
    CardBody,
    Button,
    Row,
    Col,
    Table,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Label,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";


const sequence = ['your-cart', 'shipping', 'payment', 'summary'];




const BasicDetails = () => {
    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        name="email"
                        placeholder="type your name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Description
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
                <div className='d-flex justify-content-between'>
                <FormGroup>
                    <Label for="exampleDate">
                    Start Date
                    </Label>
                    <Input
                        id="exampleDate"
                        name="date"
                        placeholder="date placeholder"
                        type="date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">
                   Finish Date
                    </Label>
                    <Input
                        id="exampleDate"
                        name="date"
                        placeholder="date placeholder"
                        type="date"
                    />
                </FormGroup>
                </div>
            </Form>

            {/* add section */}

            <div className="d-flex justify-content-between">
            <NavLink href="#">
            <i className="fa fa-fw fa-plus mr-2"></i>
           Add Rules
          </NavLink>
          <NavLink href="#">
            <i className="fa fa-fw fa-plus mr-2"></i>
           Add Participants
          </NavLink>
            </div>
        </>
    )
}



export class WizardExample extends React.Component {
    state = {
        currentStep: _.first(sequence)
    }

    render() {
        const { currentStep } = this.state;

        return (
            <Container>
                <HeaderMain
                    title="Create Survey"
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
                                Basic Details
                            </Wizard.Step>
                            <Wizard.Step
                                id={sequence[1]}
                                icon={<i className="fa fa-cube fa-fw"></i>}
                                complete={this._isComplete(sequence[1])}
                            >
                              Create Servay
                            </Wizard.Step>
                            <Wizard.Step
                                id={sequence[2]}
                                icon={<i className="fa fa-credit-card fa-fw"></i>}
                                complete={this._isComplete(sequence[2])}
                            >
                                Results
                            </Wizard.Step>
                            <Wizard.Step
                                id={sequence[3]}
                                icon={<i className="fa fa-navicon fa-fw"></i>}
                                complete={this._isComplete(sequence[3])}
                            >
                               Reports
                            </Wizard.Step>
                        </Wizard>
                    </CardBody>

                    <CardBody className="p-5">
                        {
                            (() => {
                                switch (this.state.currentStep) {
                                    case sequence[0]:
                                        // return <WizardStep1 />
                                        return <BasicDetails />
                                    case sequence[1]:
                                        // return <WizardStep2 />
                                        return <h1>Form Builder </h1>
                                    case sequence[2]:
                                        // return <WizardStep3 />
                                        return <h1>Form Result </h1>
                                    case sequence[3]:
                                        // return <WizardStep4 />
                                         return (
                                             <>
                                             <h1>Reports </h1>
                                            {/* <FormBuilder/> */}
                                            {/* <Main/> */}
                                            </>
                                         )
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
