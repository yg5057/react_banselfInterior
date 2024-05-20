import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.h2` 
    font-family: Pretendard;
    font-size: 2.45rem;
    font-weight: 500;
    line-height: 28.64px;
    text-align: center;
`;

const LabelText = ({ children }) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    );
};

export default LabelText;
