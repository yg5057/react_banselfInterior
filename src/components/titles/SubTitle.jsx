import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h2.attrs(props => ({
 style: {
        color: props.color || 'auto',
    },
}))`
    color: #121212;
    font-family: Pretendard; 
    font-size: 3.6rem; 
    font-weight: 800; 
    line-height: 42.96px; 
    text-align: left; 
  `;

const SubTitle = ({ children, color }) => {
    return (
        <StyledTitle color={color}>
            {children}
        </StyledTitle>
    );
};

export default SubTitle;
