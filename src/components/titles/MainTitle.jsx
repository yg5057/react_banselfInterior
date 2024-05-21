import React from 'react';
import styled from 'styled-components';

import mainTitle_icon from '../../assets/mainTitle_icon.png';


const StyledTitle = styled.h1` font-family: Pretendard; font-size: 4.5rem; font-weight: 800; line-height: 75px; text-align: left; color: #0047FF `;

const MainTitle = ({ children }) => {
    return (
        <StyledTitle>
            <img src={mainTitle_icon} />
            {children}
        </StyledTitle>
    );
};

export default MainTitle;
