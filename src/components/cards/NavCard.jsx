import React from 'react';

import styled from 'styled-components';

const StyledCard = styled.div.attrs(props => ({
    style: {
        width: props.width || 'auto',
        height: props.height || 'auto',
        color: props.color || 'auto',
        backgroundColor: props.backgroundColor || 'auto',
        justifyContent: props.justifyContent || 'auto',
    },
}))`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2rem 2rem 3rem 2rem;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 4px 4px 24px 0px #00000040;
  font-family: Pretendard;
  font-size: 2.6rem;
  font-weight: 700;
  text-align: left;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out; // transform 속성에 대한 애니메이션 효과 추가
  &:hover {
    transform: scale(1.05); // 호버 시 크기가 약간 확대되는 애니메이션
  }
`;

const NavCard = ({ children, onClick, width, height, backgroundColor, color, justifyContent }) => {
    return (
      <StyledCard onClick={onClick} width={width} height={height} backgroundColor={backgroundColor} color={color} justifyContent={justifyContent}>
        {children}
      </StyledCard>
    );
  };

export default NavCard;
