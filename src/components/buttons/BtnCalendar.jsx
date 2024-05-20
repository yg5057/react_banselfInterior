import React from 'react';
import styled from 'styled-components';

import btnRight from '../../assets/btnRight.png'

const StyledButton = styled.button`
display: flex;
flex-direction: row;
gap: 0.8rem;
justify-content: center;
align-items: center;
width: 28rem;
height: 4rem;
padding: 1.2rem 1.6rem;
border-radius: 28px;
background: #0047FF;
color: #FFFFFF;
font-family: Pretendard;
font-size: 2rem;
font-weight: 700;
line-height: 23.87px;
text-align: center;
cursor: pointer;
transition: transform 0.3s ease-in-out; // transform 속성에 대한 애니메이션 효과 추가
  &:hover {
    transform: scale(1.05); // 호버 시 크기가 약간 확대되는 애니메이션
  }
`;

const BtnCalendar = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
      <img src={btnRight} />
    </StyledButton>
  );
};

export default BtnCalendar;
