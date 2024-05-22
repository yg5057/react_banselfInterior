import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    width: 29.5rem;
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    border: 3px solid #121212;
    background-color: #FFFFFF;
    box-shadow: 0 12px 0 -1px #2C74FF, 0px 12px 0 2px rgba(0, 0, 0, 1);
    color: #121212;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 28.64px;
    text-align: center;
    cursor: pointer;
    &:active {
        transform: translateY(1px);  box-shadow: none;  cursor: pointer;
    }
    
`;

const BtnRequest = ({ children, onClick }) => {
    return (
        <StyledButton onClick={onClick} >
            {children}
        </StyledButton>
    );
};

export default BtnRequest;
