import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomDropdown from '../components/Input/CustomDropdown';
import BtnCalendar from '../components/buttons/BtnCalendar';
import LabelText from '../components/titles/LabelText';


// styled components
const SelectOptionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
`
const InputWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`


// SelectOptionConts
const SelectOptionConts = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const goToCalendar = () => { navigate('/plan') };


    const options = [
        { value: '1', label: '15 - 19평 아파트' },
        { value: '2', label: '20 - 24평 아파트' },
        { value: '3', label: '25 - 29평 아파트' },
        { value: '4', label: '30 - 34평 아파트' },
        { value: '5', label: '35 - 39평 아파트' },
        { value: '6', label: '40 - 49평 아파트' },
        { value: '7', label: '50평 이상 아파트' },
    ];

    const handleSelectChange = (value) => {
        setSelectedOption(value);
    };

    return (

        <SelectOptionWrapper>
            <LabelText>공사하실 곳의 전체 면적을 알려주세요</LabelText>
            <InputWrapper>
                <CustomDropdown options={options} value={selectedOption} onChange={handleSelectChange} />
                <BtnCalendar onClick={goToCalendar}>공사 계획표 받기</BtnCalendar>
            </InputWrapper>
        </SelectOptionWrapper>

    );
};

export default SelectOptionConts;
