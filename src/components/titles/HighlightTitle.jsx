import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h3` 
    font-family: Pretendard; 
    font-size: 2rem; 
    font-weight: 600; 
    line-height: 23.87px; 
    letter-spacing: 0.1em; 
    text-align: left; 
    color: #0047FF; 
`;

const HightlightTitle = ({ children }) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    );
};

export default HightlightTitle;
