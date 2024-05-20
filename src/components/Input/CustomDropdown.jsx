import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';


// styled components
const DropdownWrapper = styled.div`
  position: relative;
  width: 280px; 
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 1.2rem 1.6rem;
  border-radius: 28px;
  background-color: #fff;
  font-size: 2rem;
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  border-radius: 15px;
  background-color: #fff;
  font-size: 2rem;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  /* max-height: 150px; */
  overflow-y: auto;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectArrow = styled.svg`
  width: 24px;
  height: 24px;
  fill: #000;
`;

// Custom Dropdown 
const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>
        {value ? options.find(opt => opt.value === value).label : '공사 면적을 선택해주세요.'}
        <SelectArrow viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </SelectArrow>
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option.value} onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default CustomDropdown;
