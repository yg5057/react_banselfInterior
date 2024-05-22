import React from 'react';
import styled from 'styled-components';

import landing_icon from '../../assets/landing_icon.png';

const StyledTitle = styled.h1.attrs(props => ({
    style: {
        color: props.color || 'auto',
    },
}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5.8rem;
    align-items: center;
    font-family: Pretendard;
    font-size: 6.4rem;
    font-weight: 800;
    line-height: 76.38px;
    text-align: center;
    color: #0047FF;
`;

const LandingTitleLarge = ({ children, color }) => {

    return (
        <StyledTitle color={color}>
            <img src={landing_icon} />
            {children}
        </StyledTitle>
    );
};

export default LandingTitleLarge;
