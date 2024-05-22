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
  align-items: center;
  padding: 2rem;
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
  .hover-text-large { 
    display: none; 
    color:#121212;
    white-space: pre-line; 
    font-family: Pretendard;
    font-size: 2.5rem;
    line-height: 2.6rem;
    font-weight: normal;
    text-align: left;
    overflow-y: auto;
  }
  .hover-text { 
    display: none; 
    white-space: pre-line; 
    font-family: Pretendard;
    font-size: 1.5rem;
    line-height: 2.6rem;
    font-weight: normal;
    text-align: left;
    overflow-y: auto;
  }
  .hover-text-small { 
    display: none; 
    white-space: pre-line; 
    color: #ACABAB;
    font-family: Pretendard;
    font-size: 1.3rem;
    line-height: 2.6rem;
    font-weight: normal;
    text-align: left;
    overflow-y: auto;
  }
  .hover-text-xsmall { 
    display: none; 
    white-space: pre-line; 
    color:#FFFFFF99;
    font-family: Pretendard;
    font-size: 1.3rem;
    line-height: 2.6rem;
    font-weight: normal;
    text-align: left;
    overflow-y: auto;
  }
  
  &:hover {
    transform: scale(1.05); // 호버 시 크기가 약간 확대되는 애니메이션
    img {
      display: none; /* 이미지 숨김 */
    }
    .hover-text, .hover-text-small, .hover-text-xsmall, .hover-text-large {
      display: block; /* 호버 시 보이도록 함 */
    }
  }
`;

const NavCard = ({ children, onClick, width, height, backgroundColor, color, justifyContent, hoverText, hoverTextSmall, hoverTextXSmall, hoverTextLarge }) => {
    return (
      <StyledCard onClick={onClick} width={width} height={height} backgroundColor={backgroundColor} color={color} justifyContent={justifyContent}>
        {children}
        <div>
          <div className="hover-text-large">{hoverTextLarge}</div>
          <div className="hover-text">{hoverText}</div>
          <div className="hover-text-small">{hoverTextSmall}</div>
          <div className="hover-text-xsmall">{hoverTextXSmall}</div>
        </div>
      </StyledCard>
    );
  };

export default NavCard;
