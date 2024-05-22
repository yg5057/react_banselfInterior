import React from 'react';
import styled from 'styled-components';


const StyledText = styled.h2.attrs(props => ({
    style: {
        color: props.color || 'auto',
    },
}))`
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 800;
    line-height: 42.96px;
    text-align: left;
    color: #121212;
`;

const LandingTitleMidium = ({ children, color }) => {

    return (
        <StyledText color={color}>
            {children}
        </StyledText>
    );
};

export default LandingTitleMidium;
