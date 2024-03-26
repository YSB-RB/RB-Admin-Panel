import React, { useState } from 'react';
import {
    Button,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Input,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from '../../../components';

const AddCategory = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState(['Science', 'Engineering', 'Commerce']);

    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
    const toggleModal = () => setModalOpen(prevState => !prevState);

    const handleAddCategory = () => {
        if (newCategory.trim() !== '') {
            setCategories([...categories, newCategory]);
            setNewCategory('');
            toggleModal();
        }
    };

    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle className="align-self-center" color="secondary" outline caret>
                    Select
                </DropdownToggle>
                <DropdownMenu>
                    {categories.map(category => (
                        <DropdownItem key={category}>{category}</DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem onClick={toggleModal}>Add New</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Modal isOpen={modalOpen} toggle={toggleModal} centered>
                <ModalHeader toggle={toggleModal}>Add New</ModalHeader>
                <ModalBody>
                    <Input
                        type="text"
                        value={newCategory}
                        onChange={e => setNewCategory(e.target.value)}
                        placeholder="Enter category name"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleAddCategory}>Add</Button>{' '}
                    {/* <Button color="secondary" onClick={toggleModal}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default AddCategory;