import React from 'react';
import styled from 'styled-components';


const StyledText = styled.h3.attrs(props => ({
    style: {
        color: props.color || 'auto',
    },
}))`
    font-family: Pretendard;
    font-size: 36px;
    font-weight: 800;
    line-height: 42.96px;
    text-align: left;
    color: #0047FF;
`;

const LandingTitleSmall = ({ children, color }) => {

    return (
        <StyledText color={color}>
            {children}
        </StyledText>
    );
};

export default LandingTitleSmall;
