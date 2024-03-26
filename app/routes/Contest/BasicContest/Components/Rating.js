import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Rating = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  const toggleSubDropdown = () => setSubDropdownOpen(prevState => !prevState);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'Rating') {
      setSubDropdownOpen(true);
    } else {
      setSubDropdownOpen(false);
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
      <DropdownToggle caret>
        Select
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => handleOptionSelect('Rating')}>Rating</DropdownItem>
        <DropdownItem onClick={() => handleOptionSelect('Thumbs Up/Down')}>Thumbs Up/Down</DropdownItem>
      </DropdownMenu>
      {selectedOption === 'Rating' && (
        <DropdownMenu>
          <DropdownItem>Criteria</DropdownItem>
          <DropdownItem>Weightage</DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

export default Rating;