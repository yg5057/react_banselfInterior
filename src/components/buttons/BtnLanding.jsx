import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button.attrs(props => ({
    style: {
        boxShadow: props.boxShadow || 'auto',
    },
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 5rem;
    border-radius: 5rem;
    border: 3px solid #121212;
    background-color: #FFFFFF;
    box-shadow: 0 12px 0 -1px #2C74FF, 0px 12px 0 2px rgba(0, 0, 0, 1);
    color: #121212;
    font-family: Pretendard;
    font-size: 4rem;
    font-weight: 800;
    line-height: 47.73px;
    text-align: center;
    cursor: pointer;
    &:active {
        transform: translateY(1px);  box-shadow: none;  cursor: pointer;
    }
    
`;

const BtnHome = ({ children, onClick, boxShadow }) => {
    return (
        <StyledButton onClick={onClick} boxShadow={boxShadow}>
            {children}
        </StyledButton>
    );
};

export default BtnHome;
