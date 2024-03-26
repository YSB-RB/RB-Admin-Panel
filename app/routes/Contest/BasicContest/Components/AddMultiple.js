import React, { useState } from 'react'

import {
    Button,
    InputGroup,
    Input,
    Badge
} from "../../../../components"


const AddMultiple = () => {
    const [tags, setTags] = useState([])
    const [tagInput, setTagInput] = useState('')

    const HandleAddTag = () => {
        if (tagInput.trim() !== "") {
            setTags([...tags, tagInput.trim()])
            setTagInput(" ")
        }
    }
    const handleDelete = (index) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
    };

    const TagStyle = {
        marginRight: '5px',
        marginButton: '5px',
        padding: "3px 8px",
        color: "white",
        backgroundColor: 'teal',
        borderRadius: '3px',
        display: 'inline block',
        marginTop: "2px"
    }
    const colorStatus = ["info", "success", "warning", "primary"];


    return (
        <>
            <InputGroup>
                <Input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Add here" />
                <Button color="primary" className="align-self-center" id="tooltipAddNew" onClick={HandleAddTag}>
                    <i className="fa-fw fa fa-plus"></i>
                </Button>
            </InputGroup>
            {/* <span>
                {
                    tags.map((tag, index) => (
                        <Badge onClick={() => handleDelete} color={colorStatus[index % 4]}>{tag}</Badge>
                    ))
                }
            </span> */}

            <div style={{ marginTop: '10px' }}>
                {
                    tags.map((tag, index) => (
                        <span key={index} style={TagStyle}>
                            {tag}
                            <span style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={() => handleDelete(index)}>x</span>
                        </span>

                    ))

                }
            </div >

        </>
    )
}

export default AddMultiple