import React from 'react';
import styled from 'styled-components';

import btnLeft from '../../assets/btnLeft.png'

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  color: #0047FF;
  background-color: transparent;
  font-family: Krona One;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
  text-align: right;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; // transform 속성에 대한 애니메이션 효과 추가
  &:hover {
    transform: scale(1.05); // 호버 시 크기가 약간 확대되는 애니메이션
  }
`;

const BtnHome = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={btnLeft} />
      {children}
    </StyledButton>
  );
};

export default BtnHome;
