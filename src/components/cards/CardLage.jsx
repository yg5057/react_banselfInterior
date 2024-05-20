import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 91.5rem;
  height: 57.6rem;
  display: flex;
  flex-direction: row;
  background: #FFFFFF;
  border-radius: 15px;
  box-shadow: 5px 5px 50px 3px #DEDEDECC;
`;

const CardLarge = ({ children }) => {
    return (
      <StyledCard>
        {children}
      </StyledCard>
    );
  };

export default CardLarge;
