import React, { useState } from 'react'
import { Button, Col, FormGroup, Input,  } from "../../../../components"

const AddInputs = () => {
  const [inputs, setInputs] = useState([{ First: " ", Second: " " }])

  const HandlSocailInputChange = (e, index) => {
    const { name, value } = e.target;
    const inputlist = [...inputs];
    inputlist[index][name] = value;
    setInputs(inputlist)
  }

  const HandleAddSocialInputs = (index) => {
    setInputs([...inputs, { First: " ", Second: " " }])
  }

  const HandleDeleteSocial = (index) => {
    const inputlist = [...inputs]
    inputlist.splice(index, 1);
    setInputs(inputlist)
  }

  const SocialMedia = ["Facebook", "Instagram", "Linkedin", "Twitter"]

  return (

    <FormGroup row>
      <Col sm={2}>
        <Button color='primary' onClick={HandleAddSocialInputs}>
          <i className="fa-fw fa fa-plus"></i>
        </Button>
      </Col>
      {
        inputs.map((i) => (
          <>
            <Col sm={3}>
              <Input type='select' name="socialmedia" onChange={(e) => HandleInputChange(e, i)}>
                {
                  SocialMedia.map((asset, index) => {
                    return (
                      <option key={index}>{asset}</option>
                    )
                  })
                }
              </Input>
            </Col>

            <Col sm={5}>
              <Input type="text" name="social-link" placeholder='Enter Account Link' onChange={(e) => HandlSocailInputChange(e, i)} />
            </Col>

            <Col sm={2}>
              {
                inputs.length !== 1 &&
                <Button className="btn btn-danger m-1" onClick={HandleDeleteSocial}> x</Button>
              }
            </Col>
          </>
        ))
      }


    </FormGroup>
  )
}

export default AddInputs