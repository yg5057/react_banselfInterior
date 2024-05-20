import React from 'react';
import styled from 'styled-components';

import LabelText from '../titles/LabelText';

// Styled Components
const DateInputWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.7rem;
`;
const DateInput = styled.input`
  width: 28rem;
  height: 4rem;
  padding: 1.2rem 1.6rem;
  border-radius: 28px;
  background-color: #fff;
  font-size: 2rem;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-webkit-calendar-picker-indicator {
    width: 24px;
    height: 24px;
    cursor: pointer;
    opacity: 0.6;
  }
`;

// CustomDate 
const CustomDate = ({ startDate, handleStartDateChange }) => {
    return (
        <DateInputWrapper>
            <LabelText htmlFor="start-date">공사 시작 날짜를 알려주세요</LabelText>
            <DateInput type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />
        </DateInputWrapper>
    );
};

export default CustomDate;
