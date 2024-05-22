import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 110rem;
  height: 65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  background: #121212;
  border-radius: 50px;
`;

const LandingCard = ({ children }) => {
    return (
      <StyledCard>
        {children}
      </StyledCard>
    );
  };

export default LandingCard;
