import React, { useState } from 'react';
import { Button, Input, InputGroup, InputGroupAddon, InputGroupText, Badge } from 'reactstrap';

const Add = () => {
    const [add, setAdd] = useState([]);
    const [newPrice, setNewPrice] = useState('');

    const handleAdd = () => {
        if (newPrice.trim() !== '') {
            setAdd([...add, newPrice.trim()]);
            setNewPrice('');
        }
    };

    const handleDelete = (index) => {
        const updatedPrices = [...add];
        updatedPrices.splice(index, 1);
        setAdd(updatedPrices);
    };

    return (
        <div>
            <InputGroup>
                <Input
                    type="text"
                    placeholder="Add here"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                />
                <InputGroupAddon addonType="append">
                    <Button  className='mx-1'  color="primary" onClick={handleAdd}>Add</Button>
                </InputGroupAddon>
            </InputGroup>
            <div >
                {add.map((add, index) => (
                    <div className='d-flex '>
                    <InputGroup key={index} className="mt-2">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>{add}</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupAddon addonType="append" className='d-flex'>
                            <Button className='mx-1'  color="primary" onClick={() => handleDelete(index)}>
                            x
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Add