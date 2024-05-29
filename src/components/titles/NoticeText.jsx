import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.p.attrs(props => ({
 style: {
        color: props.color || 'auto',
    },
}))`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 17.9px;
    text-align: left;
    color: #A2A1A1;
  `;

const NoticeText = ({ children, color }) => {
    return (
        <StyledTitle color={color}>
            {children}
        </StyledTitle>
    );
};

export default NoticeText;

